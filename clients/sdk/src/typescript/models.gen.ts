
// Generated by dojo-bindgen on Sun, 25 Aug 2024 21:52:00 +0000. Do not modify this file manually.
// Import the necessary types from the recs SDK
// generate again with `sozo build --typescript` 
import { defineComponent, Type as RecsType, World } from "@dojoengine/recs";

export type ContractComponents = Awaited<ReturnType<typeof defineContractComponents>>;



// Type definition for `dojo::model::layout::Layout` enum
export type Layout = { type: 'Fixed'; value: RecsType.NumberArray; } | { type: 'Struct'; value: RecsType.StringArray; } | { type: 'Tuple'; value: RecsType.StringArray; } | { type: 'Array'; value: RecsType.StringArray; } | { type: 'ByteArray'; } | { type: 'Enum'; value: RecsType.StringArray; };

export const LayoutDefinition = {
    type: RecsType.String,
    value: RecsType.String
};
        
// Type definition for `core::byte_array::ByteArray` struct
export interface ByteArray {
    data: String[];
    pending_word: BigInt;
    pending_word_len: Number;
    
}
export const ByteArrayDefinition = {
    data: RecsType.StringArray,
    pending_word: RecsType.BigInt,
    pending_word_len: RecsType.Number,
    
};

// Type definition for `pistols64::models::challenge::Challenge` struct
export interface Challenge {
    namespace: BigInt;
    address: BigInt;
    is_available: Boolean;
    
}
export const ChallengeDefinition = {
    namespace: RecsType.BigInt,
    address: RecsType.BigInt,
    is_available: RecsType.Boolean,
    
};

// Type definition for `dojo::model::layout::FieldLayout` struct
export interface FieldLayout {
    selector: BigInt;
    layout: Layout;
    
}
export const FieldLayoutDefinition = {
    selector: RecsType.BigInt,
    layout: LayoutDefinition,
    
};


export function defineContractComponents(world: World) {
    return {

        // Model definition for `pistols64::models::challenge::Challenge` model
        Challenge: (() => {
            return defineComponent(
                world,
                {
                    namespace: RecsType.BigInt,
                    address: RecsType.BigInt,
                    is_available: RecsType.Boolean,
                },
                {
                    metadata: {
                        namespace: "pistols64",
                        name: "Challenge",
                        types: ["felt252", "ContractAddress", "bool"],
                        customTypes: [],
                    },
                }
            );
        })(),
    };
}
