import { near, BigInt, JSONValue, json, ipfs, log, TypedMap, Value, typeConversion, BigDecimal, bigInt, bigDecimal } from "@graphprotocol/graph-ts"
import { Artist, Typetoken, Serie, Nft, Market } from "../generated/schema"

export function handleReceipt(receipt: near.ReceiptWithOutcome): void {
  const actions = receipt.receipt.actions;
  for (let i = 0; i < actions.length; i++) {
    handleAction(
      actions[i], 
      receipt.receipt, 
      receipt.outcome,
      receipt.block.header
    );
  }
}

//const list_contract_atributos_referencia = [];


function handleAction(
  action: near.ActionValue,
  receipt: near.ActionReceipt,
  outcome: near.ExecutionOutcome,
  blockHeader: near.BlockHeader
): void {
    
  if (action.kind != near.ActionKind.FUNCTION_CALL) return;
  
  const data = action.toFunctionCall();

  //se obtiene el nombre del metodo que fue ejecutado en el smart contract
  const methodName = action.toFunctionCall().methodName;
  
  if (methodName == 'add_artist') {
    if(outcome.logs.length > 0) {
      const outcomeLog = outcome.logs[0].toString();
      
      if(!json.try_fromString(outcomeLog).isOk) return
      let outcomelogs = json.try_fromString(outcomeLog);
      const jsonObject = outcomelogs.value.toObject();

      if (jsonObject) {
        const logJson = jsonObject.get('params');
        if (!logJson) return;
        const data = logJson.toObject();
        
        const id_artist = data.get('id')
        const name = data.get('name')

        if (!id_artist || !name) return
        
        let artist = Artist.load(id_artist.toString())
        if (!artist) {
          artist = new Artist(id_artist.toString())
          artist.name = name.toString()
          artist.fecha = BigInt.fromU64(blockHeader.timestampNanosec)
          artist.total_nft = BigInt.fromI32(0)
          artist.total_collection = BigInt.fromI32(0)
          artist.total_event = BigInt.fromI32(0)
          artist.save()
        }
        
      }
    }
  }

  if (methodName == 'add_type_token') {
    if(outcome.logs.length > 0) {
      const outcomeLog = outcome.logs[0].toString();
      
      if(!json.try_fromString(outcomeLog).isOk) return
      let outcomelogs = json.try_fromString(outcomeLog);
      const jsonObject = outcomelogs.value.toObject();

      if (jsonObject) {
        const logJson = jsonObject.get('params');
        if (!logJson) return;
        const data = logJson.toObject();
        
        const id_type_token = data.get('id')
        const description = data.get('description')

        if (!id_type_token || !description) return
        
        let typetoken = Typetoken.load(id_type_token.toString())
        if (!typetoken) {
          typetoken = new Typetoken(id_type_token.toString())
          typetoken.description = description.toString()
          typetoken.fecha = BigInt.fromU64(blockHeader.timestampNanosec)
          typetoken.save()
        }
        
      }
    }
  }
  
  if (methodName == 'nft_series') {
    if(outcome.logs.length > 0) {
      const outcomeLog = outcome.logs[0].toString();
      
      if(!json.try_fromString(outcomeLog).isOk) return
      let outcomelogs = json.try_fromString(outcomeLog);
      const jsonObject = outcomelogs.value.toObject();

      if (jsonObject) {
        const logJson = jsonObject.get('params');
        if (!logJson) return;
        const data = logJson.toObject();
        
        const serie_id = data.get('token_series_id')
        const desc_series = data.get('desc_series')
        const creator_id = data.get('creator_id')
        const price = data.get('price')
        const metadatalog = data.get('token_metadata')

        if (!serie_id || !desc_series || !creator_id || !price || !metadatalog) return

        //convertimos la variable metadata en un objeto para poder acceder a sus variebles internas
        const metadata = metadatalog.toObject()

        //en caso de que no se transformable en un objeto se detiene la funcion
        if(!metadata) return

        //declaramos las variables dentro del objeto metadata
        const title = metadata.get('title')
        const description = metadata.get('description')
        const media = metadata.get('media')
        const extra = metadata.get('extra')
        const copies = metadata.get('copies')
        const reference = metadata.get('reference')

        //se verifica que todas las variables que necesitamos existan en el objeto metadata
        if(!title || !description || !media || !extra || !reference) return

        if(title.isNull() || media.isNull() || reference.isNull()) return
        
        //log.warning('paso {}', ["1.2"])
  
        let serie = Serie.load(serie_id.toString())
        let artist_id = serie_id.toString().split("|")[0].toString()
        let typetoken_id = serie_id.toString().split("|")[1].toString()
        if (!serie) {
          serie = new Serie(serie_id.toString())
          serie.desc_series = desc_series.toString()
          serie.artist_id = artist_id
          serie.typetoken_id = typetoken_id
          serie.title = title.toString()
          if(!description.isNull()) { serie.description = description.toString() }
          serie.media = media.toString()
          if(!extra.isNull()) { serie.extra = extra.toString() }
          serie.reference = reference.toString()
          serie.creator_id = creator_id.toString()
          if(!price.isNull()) { 
            serie.price = bigInt.fromString(price.toString()) 
            serie.price_near = bigInt.fromString(price.toString()).divDecimal(BigDecimal.fromString("1000000000000000000000000"))
          }
          serie.supply = BigInt.fromString("0")
          if(copies) { 
            if(!copies.isNull()) { serie.copies = copies.toBigInt() } 
          }
          serie.fecha = BigInt.fromU64(blockHeader.timestampNanosec)
          serie.save()
        }

        if(typetoken_id == "6") return
        
        let artist = Artist.load(artist_id) 
        if(artist) {
          artist.total_collection = artist.total_collection.plus(BigInt.fromString("1"))
          artist.save()
        }
        
      }
    }
    let utcSeconds = (blockHeader.timestampNanosec / 1000000);
    let date = new Date(utcSeconds)
    
    log.warning("fehca: {} ----  fecha epoch: {}", [date.toISOString().split('T')[0].toString(), utcSeconds.toString()])
  }


  //este evento es disparado cuando el metodo es create_form
  if (methodName == 'nft_mint' || methodName == 'nft_buy') {  
    if(outcome.logs.length > 0) {
      //obtenemos la primera iteracion del log
      const outcomeLog = outcome.logs[0].toString();
      const parsed = outcomeLog.replace('EVENT_JSON:', '')  
      //convirtiendo el log en un objeto ValueJSON
      let outcomelogs = json.try_fromString(parsed);
    
      //validamos que se cree un objeto tipo ValueJSON valido a partir del log capturado
      if(!outcomelogs.isOk) return

      const jsonlog = outcomelogs.value.toObject();
      
      const eventData = jsonlog.get('data')
      if (!eventData) return
      
      const eventArray:JSONValue[] = eventData.toArray()

      const data = eventArray[0].toObject()
      const tokenIds = data.get('token_ids')
      const owner_id = data.get('owner_id')
      
      if (!tokenIds || !owner_id) return
      
      const ids:JSONValue[] = tokenIds.toArray()
      const tokenId = ids[0].toString()

      const serie_id = tokenId.split(":", 1)[0].toString()
      // busco la metadata del token en la entidad Serie
      let metadata = Serie.load(serie_id)
      //verifico que la metadata exista, de lo contrario no se guarda el nft
      if(!metadata) return

      //buscamos si existe un token id
      let nft = Nft.load(tokenId)
      //validando que el token id no exista para agregarlo
      if(!nft) { 
        //se crea un nevo espacion en memoria de Form asociado al id y se guardan los datos
        nft = new Nft(tokenId)
        nft.serie_id = serie_id
        nft.owner_id = owner_id.toString()
        nft.title = metadata.title + " # " + tokenId.split(":", 2)[1].toString()
        nft.description = metadata.description
        nft.media = metadata.media
        nft.extra = metadata.extra
        nft.reference = metadata.reference
        nft.fecha = BigInt.fromU64(blockHeader.timestampNanosec)
        nft.artist_id = serie_id.toString().split("|")[0].toString()
        nft.save()
      }
      metadata.supply = metadata.supply.plus(BigInt.fromString("1"))
      metadata.save()

      let artist = Artist.load(serie_id.toString().split("|")[0].toString()) 
      if(artist) {
        artist.total_nft = artist.total_nft.plus(BigInt.fromString("1"))
        artist.save()
      }

    }
  }


  if (methodName == 'nft_transfer' || methodName == 'nft_transfer_payout' || methodName == 'nft_transfer_unsafe' || methodName == 'nft_transfer_call') {  
    if(outcome.logs.length > 0) {
      //obtenemos la primera iteracion del log
      const outcomeLog = outcome.logs[0].toString();
      const parsed = outcomeLog.replace('EVENT_JSON:', '')  
      //convirtiendo el log en un objeto ValueJSON
      let outcomelogs = json.try_fromString(parsed);
    
      //validamos que se cree un objeto tipo ValueJSON valido a partir del log capturado
      if(!outcomelogs.isOk) return

      const jsonlog = outcomelogs.value.toObject();
      
      const eventData = jsonlog.get('data')
      if (!eventData) return
      
      const eventArray:JSONValue[] = eventData.toArray()

      const data = eventArray[0].toObject()
      const tokenIds = data.get('token_ids')
      const new_owner_id = data.get('new_owner_id')
      
      if (!tokenIds || !new_owner_id) return
      
      const ids:JSONValue[] = tokenIds.toArray()
      const tokenId = ids[0].toString()

      //buscamos si existe un token id
      let nft = Nft.load(tokenId)
      //validando que el token id exista para actualizar el owner
      if(nft) { 
        nft.owner_id = new_owner_id.toString() 
        nft.save()
      }

      //si existe en el market lo eliminamos
      const id = tokenId.toString() + "|" + receipt.receiverId.toString()

      let market = Market.load(id)
      if (market) {
        market.delete()    
      }

    }
  }



}