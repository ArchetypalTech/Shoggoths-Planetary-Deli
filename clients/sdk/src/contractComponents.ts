/* Autogenerated file. Do not edit manually. */

import { defineComponent, Type as RecsType, World } from "@dojoengine/recs";

export type ContractComponents = Awaited<ReturnType<typeof defineContractComponents>>;

export function defineContractComponents(world: World) {
  return {
    Challenge: (() => {
      return defineComponent(
        world,
        { duel_id: RecsType.BigInt, address_a: RecsType.BigInt, address_b: RecsType.BigInt, duelist_name_a: RecsType.BigInt, duelist_name_b: RecsType.BigInt, message: RecsType.BigInt, state: RecsType.Number, winner: RecsType.Number },
        {
          metadata: {
            name: "pistols64-Challenge",
            types: ["u128","contractaddress","contractaddress","felt252","felt252","felt252","enum","u8"],
            customTypes: ["ChallengeState"],
          },
        }
      );
    })(),
    Round: (() => {
      return defineComponent(
        world,
        { duel_id: RecsType.BigInt, round_number: RecsType.Number, shot_a: { hash: RecsType.BigInt, salt: RecsType.BigInt, action: RecsType.Number, chance_crit: RecsType.Number, chance_hit: RecsType.Number, chance_lethal: RecsType.Number, dice_crit: RecsType.Number, dice_hit: RecsType.Number, damage: RecsType.Number, block: RecsType.Number, win: RecsType.Number, wager: RecsType.Number, health: RecsType.Number, honour: RecsType.Number }, shot_b: { hash: RecsType.BigInt, salt: RecsType.BigInt, action: RecsType.Number, chance_crit: RecsType.Number, chance_hit: RecsType.Number, chance_lethal: RecsType.Number, dice_crit: RecsType.Number, dice_hit: RecsType.Number, damage: RecsType.Number, block: RecsType.Number, win: RecsType.Number, wager: RecsType.Number, health: RecsType.Number, honour: RecsType.Number } },
        {
          metadata: {
            name: "pistols64-Round",
            types: ["u128","u8","u64","u64","u16","u8","u8","u8","u8","u8","u8","u8","u8","u8","u8","u8","u64","u64","u16","u8","u8","u8","u8","u8","u8","u8","u8","u8","u8","u8"],
            customTypes: ["Shot","Shot"],
          },
        }
      );
    })(),
  };
}
