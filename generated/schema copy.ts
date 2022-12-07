// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Artist extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Artist entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Artist must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Artist", id.toString(), this);
    }
  }

  static load(id: string): Artist | null {
    return changetype<Artist | null>(store.get("Artist", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get fecha(): BigInt {
    let value = this.get("fecha");
    return value!.toBigInt();
  }

  set fecha(value: BigInt) {
    this.set("fecha", Value.fromBigInt(value));
  }

  get total_nft(): BigInt {
    let value = this.get("total_nft");
    return value!.toBigInt();
  }

  set total_nft(value: BigInt) {
    this.set("total_nft", Value.fromBigInt(value));
  }

  get total_collection(): BigInt {
    let value = this.get("total_collection");
    return value!.toBigInt();
  }

  set total_collection(value: BigInt) {
    this.set("total_collection", Value.fromBigInt(value));
  }

  get total_event(): BigInt {
    let value = this.get("total_event");
    return value!.toBigInt();
  }

  set total_event(value: BigInt) {
    this.set("total_event", Value.fromBigInt(value));
  }
}

export class Typetoken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Typetoken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Typetoken must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Typetoken", id.toString(), this);
    }
  }

  static load(id: string): Typetoken | null {
    return changetype<Typetoken | null>(store.get("Typetoken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get fecha(): BigInt {
    let value = this.get("fecha");
    return value!.toBigInt();
  }

  set fecha(value: BigInt) {
    this.set("fecha", Value.fromBigInt(value));
  }
}

export class Serie extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Serie entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Serie must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Serie", id.toString(), this);
    }
  }

  static load(id: string): Serie | null {
    return changetype<Serie | null>(store.get("Serie", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get desc_series(): string {
    let value = this.get("desc_series");
    return value!.toString();
  }

  set desc_series(value: string) {
    this.set("desc_series", Value.fromString(value));
  }

  get artist_id(): string {
    let value = this.get("artist_id");
    return value!.toString();
  }

  set artist_id(value: string) {
    this.set("artist_id", Value.fromString(value));
  }

  get typetoken_id(): string {
    let value = this.get("typetoken_id");
    return value!.toString();
  }

  set typetoken_id(value: string) {
    this.set("typetoken_id", Value.fromString(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get media(): string {
    let value = this.get("media");
    return value!.toString();
  }

  set media(value: string) {
    this.set("media", Value.fromString(value));
  }

  get extra(): string | null {
    let value = this.get("extra");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set extra(value: string | null) {
    if (!value) {
      this.unset("extra");
    } else {
      this.set("extra", Value.fromString(<string>value));
    }
  }

  get reference(): string {
    let value = this.get("reference");
    return value!.toString();
  }

  set reference(value: string) {
    this.set("reference", Value.fromString(value));
  }

  get creator_id(): string {
    let value = this.get("creator_id");
    return value!.toString();
  }

  set creator_id(value: string) {
    this.set("creator_id", Value.fromString(value));
  }

  get price(): BigInt | null {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt | null) {
    if (!value) {
      this.unset("price");
    } else {
      this.set("price", Value.fromBigInt(<BigInt>value));
    }
  }

  get price_near(): BigDecimal | null {
    let value = this.get("price_near");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set price_near(value: BigDecimal | null) {
    if (!value) {
      this.unset("price_near");
    } else {
      this.set("price_near", Value.fromBigDecimal(<BigDecimal>value));
    }
  }

  get supply(): BigInt {
    let value = this.get("supply");
    return value!.toBigInt();
  }

  set supply(value: BigInt) {
    this.set("supply", Value.fromBigInt(value));
  }

  get copies(): BigInt | null {
    let value = this.get("copies");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set copies(value: BigInt | null) {
    if (!value) {
      this.unset("copies");
    } else {
      this.set("copies", Value.fromBigInt(<BigInt>value));
    }
  }

  get fecha(): BigInt {
    let value = this.get("fecha");
    return value!.toBigInt();
  }

  set fecha(value: BigInt) {
    this.set("fecha", Value.fromBigInt(value));
  }
}

export class Nft extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Nft entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Nft must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Nft", id.toString(), this);
    }
  }

  static load(id: string): Nft | null {
    return changetype<Nft | null>(store.get("Nft", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get serie_id(): string {
    let value = this.get("serie_id");
    return value!.toString();
  }

  set serie_id(value: string) {
    this.set("serie_id", Value.fromString(value));
  }

  get owner_id(): string {
    let value = this.get("owner_id");
    return value!.toString();
  }

  set owner_id(value: string) {
    this.set("owner_id", Value.fromString(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get media(): string {
    let value = this.get("media");
    return value!.toString();
  }

  set media(value: string) {
    this.set("media", Value.fromString(value));
  }

  get extra(): string | null {
    let value = this.get("extra");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set extra(value: string | null) {
    if (!value) {
      this.unset("extra");
    } else {
      this.set("extra", Value.fromString(<string>value));
    }
  }

  get reference(): string {
    let value = this.get("reference");
    return value!.toString();
  }

  set reference(value: string) {
    this.set("reference", Value.fromString(value));
  }

  get fecha(): BigInt {
    let value = this.get("fecha");
    return value!.toBigInt();
  }

  set fecha(value: BigInt) {
    this.set("fecha", Value.fromBigInt(value));
  }

  get artist_id(): string {
    let value = this.get("artist_id");
    return value!.toString();
  }

  set artist_id(value: string) {
    this.set("artist_id", Value.fromString(value));
  }

  get offer(): Array<string> {
    let value = this.get("offer");
    return value!.toStringArray();
  }

  set offer(value: Array<string>) {
    this.set("offer", Value.fromStringArray(value));
  }
}

export class Market extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Market entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Market must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Market", id.toString(), this);
    }
  }

  delete(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Market entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Market must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.remove("Market", id.toString());
    }
  }

  static load(id: string): Market | null {
    return changetype<Market | null>(store.get("Market", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get artist_id(): string {
    let value = this.get("artist_id");
    return value!.toString();
  }

  set artist_id(value: string) {
    this.set("artist_id", Value.fromString(value));
  }

  get typetoken_id(): string {
    let value = this.get("typetoken_id");
    return value!.toString();
  }

  set typetoken_id(value: string) {
    this.set("typetoken_id", Value.fromString(value));
  }

  get serie_id(): string {
    let value = this.get("serie_id");
    return value!.toString();
  }

  set serie_id(value: string) {
    this.set("serie_id", Value.fromString(value));
  }

  get token_id(): string {
    let value = this.get("token_id");
    return value!.toString();
  }

  set token_id(value: string) {
    this.set("token_id", Value.fromString(value));
  }

  get nft_contract_id(): string {
    let value = this.get("nft_contract_id");
    return value!.toString();
  }

  set nft_contract_id(value: string) {
    this.set("nft_contract_id", Value.fromString(value));
  }

  get owner_id(): string {
    let value = this.get("owner_id");
    return value!.toString();
  }

  set owner_id(value: string) {
    this.set("owner_id", Value.fromString(value));
  }

  get approval_id(): i32 {
    let value = this.get("approval_id");
    return value!.toI32();
  }

  set approval_id(value: i32) {
    this.set("approval_id", Value.fromI32(value));
  }

  get started_at(): string | null {
    let value = this.get("started_at");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set started_at(value: string | null) {
    if (!value) {
      this.unset("started_at");
    } else {
      this.set("started_at", Value.fromString(<string>value));
    }
  }

  get end_price(): string | null {
    let value = this.get("end_price");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set end_price(value: string | null) {
    if (!value) {
      this.unset("end_price");
    } else {
      this.set("end_price", Value.fromString(<string>value));
    }
  }

  get ended_at(): string | null {
    let value = this.get("ended_at");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ended_at(value: string | null) {
    if (!value) {
      this.unset("ended_at");
    } else {
      this.set("ended_at", Value.fromString(<string>value));
    }
  }

  get ft_token_id(): string | null {
    let value = this.get("ft_token_id");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ft_token_id(value: string | null) {
    if (!value) {
      this.unset("ft_token_id");
    } else {
      this.set("ft_token_id", Value.fromString(<string>value));
    }
  }

  get is_auction(): boolean {
    let value = this.get("is_auction");
    return value!.toBoolean();
  }

  set is_auction(value: boolean) {
    this.set("is_auction", Value.fromBoolean(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get price_near(): BigDecimal {
    let value = this.get("price_near");
    return value!.toBigDecimal();
  }

  set price_near(value: BigDecimal) {
    this.set("price_near", Value.fromBigDecimal(value));
  }

  get transaction_fee(): string {
    let value = this.get("transaction_fee");
    return value!.toString();
  }

  set transaction_fee(value: string) {
    this.set("transaction_fee", Value.fromString(value));
  }
}


export class Offer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Offer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Offer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Offer", id.toString(), this);
    }
  }

  delete(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Offer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Offer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.remove("Offer", id.toString());
    }
  }

  static load(id: string): Offer | null {
    return changetype<Offer | null>(store.get("Offer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get data_nft(): string {
    let value = this.get("data_nft");
    return value!.toString();
  }

  set data_nft(value: string) {
    this.set("data_nft", Value.fromString(value));
  }

  get buyer_id(): string {
    let value = this.get("buyer_id");
    return value!.toString();
  }

  set buyer_id(value: string) {
    this.set("buyer_id", Value.fromString(value));
  }

  get nft_contract_id(): string {
    let value = this.get("nft_contract_id");
    return value!.toString();
  }

  set nft_contract_id(value: string) {
    this.set("nft_contract_id", Value.fromString(value));
  }

  get token_id(): string {
    let value = this.get("token_id");
    return value!.toString();
  }

  set token_id(value: string) {
    this.set("token_id", Value.fromString(value));
  }

  get serie_id(): string {
    let value = this.get("serie_id");
    return value!.toString();
  }

  set serie_id(value: string) {
    this.set("serie_id", Value.fromString(value));
  }

  get artist_id(): string {
    let value = this.get("artist_id");
    return value!.toString();
  }

  set artist_id(value: string) {
    this.set("artist_id", Value.fromString(value));
  }

  get typetoken_id(): string {
    let value = this.get("typetoken_id");
    return value!.toString();
  }

  set typetoken_id(value: string) {
    this.set("typetoken_id", Value.fromString(value));
  }

  get ft_token_id(): string {
    let value = this.get("ft_token_id");
    return value!.toString();
  }

  set ft_token_id(value: string) {
    this.set("ft_token_id", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get price_near(): BigDecimal {
    let value = this.get("price_near");
    return value!.toBigDecimal();
  }

  set price_near(value: BigDecimal) {
    this.set("price_near", Value.fromBigDecimal(value));
  }
}
