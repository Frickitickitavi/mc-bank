﻿interface Room {
    name: string,
    upstreamName?: string,
    downstreamName?: string,
    shortcutName?: string,
    utilities?: Utility[],
    subrooms?: Room[],
    chests?: Chest[],
    shortcuts?: Shortcut[]
}

interface Chest {
    name: string,
    signName?: string,
    modifier?: string,
    silo?: number
}

interface Shortcut {
    room: string,
    items: ShortcutDestinationItem[],
    description?: string
}

interface ShortcutDestinationItem {
    name: string,
    modifier?: string
}

type Utility = "Anvil"
    | "Blast Furnace"
    | "Brewing Stand"
    | "Cartography Table"
    | "Cauldron"
    | "Composter"
    | "Composter with Storage"
    | "Crafting Table"
    | "Enchanting Table"
    | "End Portal"
    | "Ender Chest"
    | "Fletching Table"
    | "Furnace"
    | "Grass Field"
    | "Grindstone"
    | "Jukebox"
    | "Lectern"
    | "Loom"
    | "Nether Portal"
    | "Smithing Table"
    | "Smoker"
    | "Stonecutter"
    | "Water Source";

interface Dimensions {
    x: number,
    y: number,
    z: number
}

function getUtilityDimensions(utility: Utility): Dimensions | "door" {
    switch (utility) {
        case "Composter with Storage":
            return { x: 1, y: 3, z: 1 };
        case "End Portal":
            return "door";
        case "Grass Field":
            return { x: 7, y: 0, z: 7 };
        case "Nether Portal":
            return { x: 4, y: 5, z: 1 };
        case "Water Source":
            return { x: 2, y: 0, z: 2 };
        default:
            return { x: 1, y: 1, z: 1 };
    }
}

const bank: Room = {
    name: "Main Lobby",
    utilities: [
        "Anvil",
        "Blast Furnace",
        "Blast Furnace",
        "Blast Furnace",
        "Brewing Stand",
        "Cartography Table",
        "Cauldron",
        "Composter",
        "Crafting Table",
        "Enchanting Table",
        "End Portal",
        "Ender Chest",
        "Fletching Table",
        "Furnace",
        "Furnace",
        "Furnace",
        "Furnace",
        "Furnace",
        "Furnace",
        "Grindstone",
        "Jukebox",
        "Lectern",
        "Loom",
        "Nether Portal",
        "Smithing Table",
        "Smoker",
        "Smoker",
        "Smoker",
        "Stonecutter",
        "Water Source"
    ],
    subrooms: [
        {
            name: "Blocks & Entities",
            utilities: [
                "Crafting Table"
            ],
            subrooms: [
                {
                    name: "Minerals",
                    utilities: [
                        "Furnace",
                        "Blast Furnace"
                    ],
                    subrooms: [
                        {
                            name: "Ores",
                            utilities: [
                                "Furnace",
                                "Blast Furnace"
                            ],
                            chests: [
                                {
                                    name: "Iron Ore"
                                },
                                {
                                    name: "Deepslate Iron Ore"
                                },
                                {
                                    name: "Gold Ore"
                                },
                                {
                                    name: "Deepslate Gold Ore"
                                },
                                {
                                    name: "Nether Gold Ore"
                                },
                                {
                                    name: "Quartz Ore"
                                },
                                {
                                    name: "Redstone Ore"
                                },
                                {
                                    name: "Deepslate Redstone Ore"
                                },
                                {
                                    name: "Emerald Ore"
                                },
                                {
                                    name: "Deepslate Emerald Ore"
                                },
                                {
                                    name: "Diamond Ore"
                                },
                                {
                                    name: "Deepslate Diamond Ore"
                                },
                                {
                                    name: "Lapis Lazuli Ore"
                                },
                                {
                                    name: "Deepslate Lapis Lazuli Ore"
                                },
                                {
                                    name: "Coal Ore"
                                },
                                {
                                    name: "Copper Ore"
                                },
                                {
                                    name: "Ancient Debris"
                                },
                                {
                                    name: "Resin Clump",
                                    signName: "Resin Clumps"
                                }
                            ]
                        },
                        {
                            name: "Amethyst Clusters",
                            chests: [
                                {
                                    name: "Small Amethyst Bud",
                                    signName: "Small Amethyst Buds"
                                },
                                {
                                    name: "Medium Amethyst Bud",
                                    signName: "Medium Amethyst Buds"
                                },
                                {
                                    name: "Large Amethyst Bud",
                                    signName: "Large Amethyst Buds"
                                },
                                {
                                    name: "Amethyst Cluster",
                                    signName: "Amethyst Clusters"
                                }
                            ]
                        },
                        {
                            name: "Mineral Blocks",
                            utilities: [
                                "Furnace",
                                "Blast Furnace"
                            ],
                            chests: [
                                {
                                    name: "Block of Coal",
                                    signName: "Coal Blocks"
                                },
                                {
                                    name: "Block of Quartz",
                                    signName: "Quartz Blocks"
                                },
                                {
                                    name: "Block of Lapis Lazuli",
                                    signName: "Lapis Lazuli Blocks"
                                },
                                {
                                    name: "Block of Redstone",
                                    signName: "Redstone Blocks"
                                },
                                {
                                    name: "Block of Iron",
                                    signName: "Iron Blocks"
                                },
                                {
                                    name: "Block of Gold",
                                    signName: "Gold Blocks"
                                },
                                {
                                    name: "Block of Diamond",
                                    signName: "Diamond Blocks"
                                },
                                {
                                    name: "Block of Emerald",
                                    signName: "Emerald Blocks"
                                },
                                {
                                    name: "Chiseled Quartz Block",
                                    signName: "Chiseled Quartz Blocks"
                                },
                                {
                                    name: "Pillar Quartz Block",
                                    signName: "Pillar Quartz Blocks"
                                },
                                {
                                    name: "Smooth Quartz Block",
                                    signName: "Smooth Quartz Blocks"
                                },
                                {
                                    name: "Quartz Bricks"
                                },
                                {
                                    name: "Block of Netherite",
                                    signName: "Netherite Blocks"
                                },
                                {
                                    name: "Block of Raw Iron",
                                    signName: "Raw Iron Blocks"
                                },
                                {
                                    name: "Block of Raw Gold",
                                    signName: "Raw Gold Blocks"
                                },
                                {
                                    name: "Block of Amethyst",
                                    signName: "Amethyst Blocks"
                                },
                                {
                                    name: "Block of Resin",
                                    signName: "Resin Blocks"
                                },
                                {
                                    name: "Resin Bricks",
                                },
                                {
                                    name: "Chiseled Resin Bricks",
                                }

                            ],
                            subrooms: [
                                {
                                    name: "Copper Blocks",
                                    chests: [
                                        {
                                            name: "Block of Copper",
                                            signName: "Regular"
                                        },
                                        {
                                            name: "Exposed Copper",
                                            signName: "Exposed"
                                        },
                                        {
                                            name: "Weathered Copper",
                                            signName: "Weathered"
                                        },
                                        {
                                            name: "Oxidized Copper",
                                            signName: "Oxidized"
                                        },
                                        {
                                            name: "Waxed Copper",
                                            signName: "Waxed"
                                        },
                                        {
                                            name: "Waxed Exposed Copper",
                                            signName: "Waxed Exposed"
                                        },
                                        {
                                            name: "Waxed Weathered Copper",
                                            signName: "Waxed Weathered"
                                        },
                                        {
                                            name: "Waxed Oxidized Copper",
                                            signName: "Waxed Oxidized"
                                        },
                                        {
                                            name: "Cut Copper",
                                            signName: "Cut"
                                        },
                                        {
                                            name: "Exposed Cut Copper",
                                            signName: "Exposed Cut"
                                        },
                                        {
                                            name: "Weathered Cut Copper",
                                            signName: "Weathered Cut"
                                        },
                                        {
                                            name: "Oxidized Cut Copper",
                                            signName: "Oxidized Cut"
                                        },
                                        {
                                            name: "Waxed Cut Copper",
                                            signName: "Waxed Cut"
                                        },
                                        {
                                            name: "Waxed Exposed Cut Copper",
                                            signName: "Waxed Exposed Cut"
                                        },
                                        {
                                            name: "Waxed Weathered Cut Copper",
                                            signName: "Waxed Weathered Cut"
                                        },
                                        {
                                            name: "Waxed Oxidized Cut Copper",
                                            signName: "Waxed Oxidized Cut"
                                        },
                                        {
                                            name: "Chiseled Copper",
                                            signName: "Chiseled"
                                        },
                                        {
                                            name: "Exposed Chiseled Copper",
                                            signName: "Exposed Chiseled"
                                        },
                                        {
                                            name: "Weathered Chiseled Copper",
                                            signName: "Weathered Chiseled"
                                        },
                                        {
                                            name: "Oxidized Chiseled Copper",
                                            signName: "Oxidized Chiseled"
                                        },
                                        {
                                            name: "Waxed Chiseled Copper",
                                            signName: "Waxed Chiseled"
                                        },
                                        {
                                            name: "Waxed Exposed Chiseled Copper",
                                            signName: "Waxed Exposed Chiseled"
                                        },
                                        {
                                            name: "Waxed Weathered Chiseled Copper",
                                            signName: "Waxed Weathered Chiseled"
                                        },
                                        {
                                            name: "Waxed Oxidized Chiseled Copper",
                                            signName: "Waxed Oxidized Chiseled"
                                        },
                                        {
                                            name: "Block of Raw Copper",
                                            signName: "Raw"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Rocks",
                    subrooms: [
                        {
                            name: "Stone",
                            subrooms: [
                                {
                                    name: "Regular Stone",
                                    utilities: [
                                        "Crafting Table",
                                        "Furnace",
                                        "Stonecutter"
                                    ],
                                    chests: [
                                        {
                                            name: "Stone",
                                            silo: 0
                                        },
                                        {
                                            name: "Cobblestone",
                                            silo: 11
                                        },
                                        {
                                            name: "Smooth Stone"
                                        },
                                        {
                                            name: "Mossy Cobblestone"
                                        },
                                        {
                                            name: "Stone Bricks"
                                        },
                                        {
                                            name: "Chiseled Stone Bricks"
                                        },
                                        {
                                            name: "Mossy Stone Bricks"
                                        },
                                        {
                                            name: "Cracked Stone Bricks"
                                        }
                                    ]
                                },
                                {
                                    name: "Deepslate",
                                    utilities: [
                                        "Crafting Table",
                                        "Furnace"
                                    ],
                                    chests: [
                                        {
                                            name: "Deepslate"
                                        },
                                        {
                                            name: "Cobbled Deepslate",
                                            silo: 7
                                        },
                                        {
                                            name: "Polished Deepslate"
                                        },
                                        {
                                            name: "Deepslate Bricks"
                                        },
                                        {
                                            name: "Cracked Deepslate Bricks"
                                        },
                                        {
                                            name: "Deepslate Tiles"
                                        },
                                        {
                                            name: "Cracked Deepslate Tiles"
                                        },
                                        {
                                            name: "Chiseled Deepslate"
                                        }
                                    ]
                                },
                                {
                                    name: "Andesite, Diorite, & Granite",
                                    chests: [
                                        {
                                            name: "Andesite",
                                            silo: 0
                                        },
                                        {
                                            name: "Polished Andesite"
                                        },
                                        {
                                            name: "Diorite",
                                            silo: 0
                                        },
                                        {
                                            name: "Polished Diorite"
                                        },
                                        {
                                            name: "Granite",
                                            silo: 0
                                        },
                                        {
                                            name: "Polished Granite"
                                        }
                                    ]
                                },
                                {
                                    name: "Blackstone",
                                    chests: [
                                        {
                                            name: "Blackstone"
                                        },
                                        {
                                            name: "Gilded Blackstone"
                                        },
                                        {
                                            name: "Polished Blackstone"
                                        },
                                        {
                                            name: "Polished Blackstone Bricks"
                                        },
                                        {
                                            name: "Chiseled Polished Blackstone"
                                        },
                                        {
                                            name: "Cracked Polished Blackstone Bricks"
                                        }
                                    ]
                                },
                                {
                                    name: "Basalt",
                                    chests: [
                                        {
                                            name: "Basalt"
                                        },
                                        {
                                            name: "Polished Basalt"
                                        },
                                        {
                                            name: "Smooth Basalt"
                                        }
                                    ]
                                },
                                {
                                    name: "Tuff",
                                    chests: [
                                        {
                                            name: "Tuff",
                                            silo: 0
                                        },
                                        {
                                            name: "Chiseled Tuff"
                                        },
                                        {
                                            name: "Polished Tuff"
                                        },
                                        {
                                            name: "Tuff Bricks"
                                        },
                                        {
                                            name: "Chiseled Tuff Bricks"
                                        }

                                    ]
                                },
                                {
                                    name: "Other Rocks",
                                    upstreamName: "Other",
                                    chests: [
                                        {
                                            name: "Calcite"
                                        },
                                        {
                                            name: "Dripstone Block",
                                            signName: "Dripstone Blocks"
                                        },
                                        {
                                            name: "Pointed Dripstone"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Soil",
                            utilities: [
                                "Crafting Table"
                            ],
                            shortcuts: [
                                {
                                    room: "Nether Fungi",
                                    items: [
                                        {
                                            name: "Crimson Nylium"
                                        },
                                        {
                                            name: "Warped Nylium"
                                        }
                                    ],
                                    description: "Nylium"
                                },
                                {
                                    room: "Nether",
                                    items: [
                                        {
                                            name: "Soul Soil"
                                        }
                                    ]
                                }
                            ],
                            chests: [
                                {
                                    name: "Rooted Dirt"
                                },
                                {
                                    name: "Coarse Dirt"
                                },
                                {
                                    name: "Gravel",
                                    silo: 0
                                },
                                {
                                    name: "Dirt",
                                    silo: 5
                                },
                                {
                                    name: "Mycelium"
                                },
                                {
                                    name: "Podzol"
                                },
                                {
                                    name: "Grass Block",
                                    signName: "Grass"
                                },
                                {
                                    name: "Dirt Path",
                                    signName: "Dirt Paths"
                                },
                                {
                                    name: "Mud"
                                },
                                {
                                    name: "Packed Mud"
                                },
                                {
                                    name: "Mud Bricks"
                                }
                            ]
                        },
                        {
                            name: "Sand",
                            shortcuts: [
                                {
                                    room: "Nether",
                                    items: [
                                        {
                                            name: "Soul Sand"
                                        }
                                    ]
                                }
                            ],
                            chests: [
                                {
                                    name: "Sand"
                                },
                                {
                                    name: "Red Sand"
                                },
                                {
                                    name: "Sandstone"
                                },
                                {
                                    name: "Red Sandstone"
                                },
                                {
                                    name: "Cut Sandstone"
                                },
                                {
                                    name: "Cut Red Sandstone"
                                },
                                {
                                    name: "Smooth Sandstone"
                                },
                                {
                                    name: "Smooth Red Sandstone"
                                },
                                {
                                    name: "Chiseled Sandstone"
                                },
                                {
                                    name: "Chiseled Red Sandstone"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Wood",
                    subrooms: [
                        {
                            name: "Logs, Stems, & Bamboo Blocks",
                            chests: [
                                {
                                    name: "Oak Log",
                                    signName: "Oak Logs"
                                },
                                {
                                    name: "Birch Log",
                                    signName: "Birch Logs"
                                },
                                {
                                    name: "Spruce Log",
                                    signName: "Spruce Logs"
                                },
                                {
                                    name: "Acacia Log",
                                    signName: "Acacia Logs"
                                },
                                {
                                    name: "Jungle Log",
                                    signName: "Jungle Logs"
                                },
                                {
                                    name: "Dark Oak Log",
                                    signName: "Dark Oak Logs"
                                },
                                {
                                    name: "Pale Oak Log",
                                    signName: "Pale Oak Logs"
                                },
                                {
                                    name: "Mangrove Log",
                                    signName: "Mangrove Logs"
                                },
                                {
                                    name: "Cherry Log",
                                    signName: "Cherry Logs"
                                },
                                {
                                    name: "Crimson Stem",
                                    signName: "Crimson Stems"
                                },
                                {
                                    name: "Warped Stem",
                                    signName: "Warped Stems"
                                },
                                {
                                    name: "Block of Bamboo",
                                    signName: "Bamboo Blocks"
                                }
                            ]
                        },
                        {
                            name: "Stripped Logs, Stems, & Bamboo Blocks",
                            chests: [
                                {
                                    name: "Stripped Oak Log",
                                    signName: "Stripped Oak Logs"
                                },
                                {
                                    name: "Stripped Birch Log",
                                    signName: "Stripped Birch Logs"
                                },
                                {
                                    name: "Stripped Spruce Log",
                                    signName: "Stripped Spruce Logs"
                                },
                                {
                                    name: "Stripped Acacia Log",
                                    signName: "Stripped Acacia Logs"
                                },
                                {
                                    name: "Stripped Jungle Log",
                                    signName: "Stripped Jungle Logs"
                                },
                                {
                                    name: "Stripped Dark Oak Log",
                                    signName: "Stripped Dark Oak Logs"
                                },
                                {
                                    name: "Stripped Pale Oak Log",
                                    signName: "Stripped Pale Oak Logs"
                                },
                                {
                                    name: "Stripped Mangrove Log",
                                    signName: "Stripped Mangrove Logs"
                                },
                                {
                                    name: "Stripped Cherry Log",
                                    signName: "Stripped Cherry Logs"
                                },
                                {
                                    name: "Stripped Crimson Stem",
                                    signName: "Stripped Crimson Stems"
                                },
                                {
                                    name: "Stripped Warped Stem",
                                    signName: "Stripped Warped Stems"
                                },
                                {
                                    name: "Block of Stripped Bamboo",
                                    signName: "Stripped Bamboo Blocks"
                                }
                            ]
                        },
                        {
                            name: "Planks & Mosaics",
                            chests: [
                                {
                                    name: "Oak Planks"
                                },
                                {
                                    name: "Birch Planks"
                                },
                                {
                                    name: "Spruce Planks"
                                },
                                {
                                    name: "Acacia Planks"
                                },
                                {
                                    name: "Jungle Planks"
                                },
                                {
                                    name: "Dark Oak Planks"
                                },
                                {
                                    name: "Pale Oak Planks"
                                },
                                {
                                    name: "Mangrove Planks"
                                },
                                {
                                    name: "Cherry Planks"
                                },
                                {
                                    name: "Crimson Planks"
                                },
                                {
                                    name: "Warped Planks"
                                },
                                {
                                    name: "Bamboo Planks"
                                },
                                {
                                    name: "Bamboo Mosaic",
                                    signName: "Bamboo Mosaics"
                                }
                            ]
                        },
                        {
                            name: "Wood Blocks and Hyphae",
                            upstreamName: "Wood and Hyphae",
                            chests: [
                                {
                                    name: "Oak Wood"
                                },
                                {
                                    name: "Birch Wood"
                                },
                                {
                                    name: "Spruce Wood"
                                },
                                {
                                    name: "Acacia Wood"
                                },
                                {
                                    name: "Jungle Wood"
                                },
                                {
                                    name: "Dark Oak Wood"
                                },
                                {
                                    name: "Pale Oak Wood"
                                },
                                {
                                    name: "Mangrove Wood"
                                },
                                {
                                    name: "Cherry Wood"
                                },
                                {
                                    name: "Crimson Hyphae"
                                },
                                {
                                    name: "Warped Hyphae"
                                }
                            ]
                        },
                        {
                            name: "Stripped Wood",
                            chests: [
                                {
                                    name: "Stripped Oak Wood"
                                },
                                {
                                    name: "Stripped Birch Wood"
                                },
                                {
                                    name: "Stripped Spruce Wood"
                                },
                                {
                                    name: "Stripped Acacia Wood"
                                },
                                {
                                    name: "Stripped Jungle Wood"
                                },
                                {
                                    name: "Stripped Dark Oak Wood"
                                },
                                {
                                    name: "Stripped Pale Oak Wood"
                                },
                                {
                                    name: "Stripped Mangrove Wood"
                                },
                                {
                                    name: "Stripped Cherry Wood"
                                },
                                {
                                    name: "Stripped Crimson Hyphae"
                                },
                                {
                                    name: "Stripped Warped Hyphae"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Barriers",
                    utilities: [
                        "Stonecutter"
                    ],
                    subrooms: [
                        {
                            name: "Walls",
                            chests: [
                                {
                                    name: "Mud Brick Wall",
                                    signName: "Mud Brick Walls"
                                },
                                {
                                    name: "Polished Blackstone Brick Wall",
                                    signName: "Polished Blackstone Brick Walls"
                                },
                                {
                                    name: "Blackstone Wall",
                                    signName: "Blackstone Walls"
                                },
                                {
                                    name: "Polished Blackstone Wall",
                                    signName: "Polished Blackstone Walls"
                                },
                                {
                                    name: "End Stone Brick Wall",
                                    signName: "End Stone Brick Walls"
                                },
                                {
                                    name: "Prismarine Wall",
                                    signName: "Prismarine Walls"
                                },
                                {
                                    name: "Deepslate Wall",
                                    signName: "Deepslate Walls"
                                },
                                {
                                    name: "Polished Deepslate Wall",
                                    signName: "Polished Deepslate Walls"
                                },
                                {
                                    name: "Deepslate Brick Wall",
                                    signName: "Deepslate Brick Walls"
                                },
                                {
                                    name: "Deepslate Tile Wall",
                                    signName: "Deepslate Tile Walls"
                                },
                                {
                                    name: "Granite Wall",
                                    signName: "Granite Walls"
                                },
                                {
                                    name: "Diorite Wall",
                                    signName: "Diorite Walls"
                                },
                                {
                                    name: "Andesite Wall",
                                    signName: "Andesite Walls"
                                },
                                {
                                    name: "Brick Wall",
                                    signName: "Brick Walls"
                                },
                                {
                                    name: "Sandstone Wall",
                                    signName: "Sandstone Walls"
                                },
                                {
                                    name: "Red Sandstone Wall",
                                    signName: "Red Sandstone Walls"
                                },
                                {
                                    name: "Nether Brick Wall",
                                    signName: "Nether Brick Walls"
                                },
                                {
                                    name: "Red Nether Brick Wall",
                                    signName: "Red Nether Brick Walls"
                                },
                                {
                                    name: "Cobblestone Wall",
                                    signName: "Cobblestone Walls"
                                },
                                {
                                    name: "Mossy Cobblestone Wall",
                                    signName: "Mossy Cobble Walls"
                                },
                                {
                                    name: "Stone Brick Wall",
                                    signName: "Stone Brick Walls"
                                },
                                {
                                    name: "Mossy Stone Brick Wall",
                                    signName: "Mossy Stone Brick Walls"
                                },
                                {
                                    name: "Tuff Wall",
                                    signName: "Tuff Walls"
                                },
                                {
                                    name: "Polished Tuff Wall",
                                    signName: "Polished Tuff Walls"
                                },
                                {
                                    name: "Tuff Brick Wall",
                                    signName: "Tuff Brick Walls"
                                },
                                {
                                    name: "Resin Brick Wall",
                                    signName: "Resin Brick Walls"
                                }
                            ]
                        },
                        {
                            name: "Trapdoors",
                            subrooms: [
                                {
                                    name: "Wood & Fungus Trapdoors",
                                    upstreamName: "Wood & Fungus",
                                    chests: [
                                        {
                                            name: "Oak Trapdoor",
                                            signName: "Oak Trapdoors"
                                        },
                                        {
                                            name: "Birch Trapdoor",
                                            signName: "Birch Trapdoors"
                                        },
                                        {
                                            name: "Spruce Trapdoor",
                                            signName: "Spruce Trapdoors"
                                        },
                                        {
                                            name: "Acacia Trapdoor",
                                            signName: "Acacia Trapdoors"
                                        },
                                        {
                                            name: "Jungle Trapdoor",
                                            signName: "Jungle Trapdoors"
                                        },
                                        {
                                            name: "Dark Oak Trapdoor",
                                            signName: "Dark Oak Trapdoors"
                                        },
                                        {
                                            name: "Pale Oak Trapdoor",
                                            signName: "Pale Oak Trapdoors"
                                        },
                                        {
                                            name: "Crimson Trapdoor",
                                            signName: "Crimson Trapdoors"
                                        },
                                        {
                                            name: "Warped Trapdoor",
                                            signName: "Warped Trapdoors"
                                        },
                                        {
                                            name: "Mangrove Trapdoor",
                                            signName: "Mangrove Trapdoors"
                                        },
                                        {
                                            name: "Cherry Trapdoor",
                                            signName: "Cherry Trapdoors"
                                        },
                                        {
                                            name: "Bamboo Trapdoor",
                                            signName: "Bamboo Trapdoors"
                                        }
                                    ]
                                },
                                {
                                    name: "Metal Trapdoors",
                                    upstreamName: "Metal",
                                    chests: [
                                        {
                                            name: "Iron Trapdoor",
                                            signName: "Iron"
                                        },
                                        {
                                            name: "Copper Trapdoor",
                                            signName: "Copper"
                                        },
                                        {
                                            name: "Exposed Copper Trapdoor",
                                            signName: "Exposed Copper"
                                        },
                                        {
                                            name: "Weathered Copper Trapdoor",
                                            signName: "Weathered Copper"
                                        },
                                        {
                                            name: "Oxidized Copper Trapdoor",
                                            signName: "Oxidized Copper"
                                        },
                                        {
                                            name: "Waxed Copper Trapdoor",
                                            signName: "Waxed Copper"
                                        },
                                        {
                                            name: "Waxed Exposed Copper Trapdoor",
                                            signName: "Waxed Exposed Copper"
                                        },
                                        {
                                            name: "Waxed Weathered Copper Trapdoor",
                                            signName: "Waxed Weathered Copper"
                                        },
                                        {
                                            name: "Waxed Oxidized Copper Trapdoor",
                                            signName: "Waxed Oxidized Copper"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Fences & Bars",
                            chests: [
                                {
                                    name: "Oak Fence",
                                    signName: "Oak Fences"
                                },
                                {
                                    name: "Birch Fence",
                                    signName: "Birch Fences"
                                },
                                {
                                    name: "Spruce Fence",
                                    signName: "Spruce Fences"
                                },
                                {
                                    name: "Acacia Fence",
                                    signName: "Acacia Fences"
                                },
                                {
                                    name: "Jungle Fence",
                                    signName: "Jungle Fences"
                                },
                                {
                                    name: "Dark Oak Fence",
                                    signName: "Dark Oak Fences"
                                },
                                {
                                    name: "Pale Oak Fence",
                                    signName: "Pale Oak Fences"
                                },
                                {
                                    name: "Crimson Fence",
                                    signName: "Crimson Fences"
                                },
                                {
                                    name: "Warped Fence",
                                    signName: "Warped Fences"
                                },
                                {
                                    name: "Mangrove Fence",
                                    signName: "Mangrove Fences"
                                },
                                {
                                    name: "Cherry Fence",
                                    signName: "Cherry Fences"
                                },
                                {
                                    name: "Bamboo Fence",
                                    signName: "Bamboo Fences"
                                },
                                {
                                    name: "Iron Fence",
                                    signName: "Iron Fences"
                                },
                                {
                                    name: "Nether Brick Fence",
                                    signName: "Nether Brick Fences"
                                },
                                {
                                    name: "Iron Bars"
                                }
                            ]
                        },
                        {
                            name: "Doors",
                            subrooms: [
                                {
                                    name: "Wood & Fungus Doors",
                                    upstreamName: "Wood & Fungus",
                                    chests: [
                                        {
                                            name: "Oak Door",
                                            signName: "Oak Doors"
                                        },
                                        {
                                            name: "Birch Door",
                                            signName: "Birch Doors"
                                        },
                                        {
                                            name: "Spruce Door",
                                            signName: "Spruce Doors"
                                        },
                                        {
                                            name: "Acacia Door",
                                            signName: "Acacia Doors"
                                        },
                                        {
                                            name: "Jungle Door",
                                            signName: "Jungle Doors"
                                        },
                                        {
                                            name: "Dark Oak Door",
                                            signName: "Dark Oak Doors"
                                        },
                                        {
                                            name: "Pale Oak Door",
                                            signName: "Pale Oak Doors"
                                        },
                                        {
                                            name: "Crimson Door",
                                            signName: "Crimson Doors"
                                        },
                                        {
                                            name: "Warped Door",
                                            signName: "Warped Doors"
                                        },
                                        {
                                            name: "Mangrove Door",
                                            signName: "Mangrove Doors"
                                        },
                                        {
                                            name: "Cherry Door",
                                            signName: "Cherry Doors"
                                        },
                                        {
                                            name: "Bamboo Door",
                                            signName: "Bamboo Doors"
                                        }
                                    ]
                                },
                                {
                                    name: "Metal Doors",
                                    upstreamName: "Metal",
                                    chests: [
                                        {
                                            name: "Iron Door",
                                            signName: "Iron Doors"
                                        },
                                        {
                                            name: "Copper Door",
                                            signName: "Copper Doors"
                                        },
                                        {
                                            name: "Exposed Copper Door",
                                            signName: "Exposed Copper Doors"
                                        },
                                        {
                                            name: "Weathered Copper Door",
                                            signName: "Weathered Copper Doors"
                                        },
                                        {
                                            name: "Oxidized Copper Door",
                                            signName: "Oxidized Copper Doors"
                                        },
                                        {
                                            name: "Waxed Copper Door",
                                            signName: "Waxed Copper Doors"
                                        },
                                        {
                                            name: "Waxed Exposed Copper Door",
                                            signName: "Waxed Exposed Copper Doors"
                                        },
                                        {
                                            name: "Waxed Weathered Copper Door",
                                            signName: "Waxed Weathered Copper Doors"
                                        },
                                        {
                                            name: "Waxed Oxidized Copper Door",
                                            signName: "Waxed Oxidized Copper Doors"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Fence Gates",
                            chests: [
                                {
                                    name: "Oak Fence Gate",
                                    signName: "Oak Fence Gates"
                                },
                                {
                                    name: "Birch Fence Gate",
                                    signName: "Birch Fence Gates"
                                },
                                {
                                    name: "Spruce Fence Gate",
                                    signName: "Spruce Fence Gates"
                                },
                                {
                                    name: "Acacia Fence Gate",
                                    signName: "Acacia Fence Gates"
                                },
                                {
                                    name: "Jungle Fence Gate",
                                    signName: "Jungle Fence Gates"
                                },
                                {
                                    name: "Dark Oak Fence Gate",
                                    signName: "Dark Oak Fence Gates"
                                },
                                {
                                    name: "Pale Oak Fence Gate",
                                    signName: "Pale Oak Fence Gates"
                                },
                                {
                                    name: "Crimson Fence Gate",
                                    signName: "Crimson Fence Gates"
                                },
                                {
                                    name: "Warped Fence Gate",
                                    signName: "Warped Fence Gates"
                                },
                                {
                                    name: "Mangrove Fence Gate",
                                    signName: "Mangrove Fence Gates"
                                },
                                {
                                    name: "Cherry Fence Gate",
                                    signName: "Cherry Fence Gates"
                                },
                                {
                                    name: "Bamboo Fence Gate",
                                    signName: "Bamboo Fence Gates"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Partial Blocks",
                    utilities: [
                        "Stonecutter"
                    ],
                    subrooms: [
                        {
                            name: "Slabs",
                            subrooms: [
                                {
                                    name: "Stone Slabs",
                                    upstreamName: "Stone",
                                    chests: [
                                        {
                                            name: "Cobbled Deepslate Slab",
                                            signName: "Cobbled Deepslate Slabs"
                                        },
                                        {
                                            name: "Polished Deepslate Slab",
                                            signName: "Polished Deepslate Slabs"
                                        },
                                        {
                                            name: "Deepslate Brick Slab",
                                            signName: "Deepslate Brick Slabs"
                                        },
                                        {
                                            name: "Deepslate Tile Slab",
                                            signName: "Deepslate Tile Slabs"
                                        },
                                        {
                                            name: "Granite Slab",
                                            signName: "Granite Slabs"
                                        },
                                        {
                                            name: "Polished Granite Slab",
                                            signName: "Polished Granite Slabs"
                                        },
                                        {
                                            name: "Diorite Slab",
                                            signName: "Diorite Slabs"
                                        },
                                        {
                                            name: "Polished Diorite Slab",
                                            signName: "Polished Diorite Slabs"
                                        },
                                        {
                                            name: "Andesite Slab",
                                            signName: "Andesite Slabs"
                                        },
                                        {
                                            name: "Polished Andesite Slab",
                                            signName: "Polished Andesite Slabs"
                                        },
                                        {
                                            name: "Smooth Stone Slab",
                                            signName: "Smooth Stone Slabs"
                                        },
                                        {
                                            name: "Stone Slab",
                                            signName: "Stone Slabs"
                                        },
                                        {
                                            name: "Cobblestone Slab",
                                            signName: "Cobblestone Slabs"
                                        },
                                        {
                                            name: "Mossy Cobblestone Slab",
                                            signName: "Mossy Cobble Slabs"
                                        },
                                        {
                                            name: "Stone Brick Slab",
                                            signName: "Stone Brick Slabs"
                                        },
                                        {
                                            name: "Blackstone Slab",
                                            signName: "Blackstone Slabs"
                                        },
                                        {
                                            name: "Polished Blackstone Slab",
                                            signName: "Polished Blackstone Slabs"
                                        },
                                        {
                                            name: "Polished Blackstone Brick Slab",
                                            signName: "Polished Blackstone Brick Slabs"
                                        },
                                        {
                                            name: "Tuff Slab",
                                            signName: "Tuff Slabs"
                                        },
                                        {
                                            name: "Polished Tuff Slab",
                                            signName: "Polished Tuff Slabs"
                                        },
                                        {
                                            name: "Tuff Brick Slab",
                                            signName: "Tuff Brick Slabs"
                                        }
                                    ]
                                },
                                {
                                    name: "Sandstone Slabs",
                                    upstreamName: "Sandstone",
                                    chests: [
                                        {
                                            name: "Sandstone Slab",
                                            signName: "Sandstone Slabs"
                                        },
                                        {
                                            name: "Red Sandstone Slab",
                                            signName: "Red Sandstone Slabs"
                                        },
                                        {
                                            name: "Smooth Sandstone Slab",
                                            signName: "Smooth Sandstone Slabs"
                                        },
                                        {
                                            name: "Smooth Red Sandstone Slab",
                                            signName: "Smooth Red Sandstone Slabs"
                                        },
                                        {
                                            name: "Cut Sandstone Slab",
                                            signName: "Cut Sandstone Slabs"
                                        },
                                        {
                                            name: "Cut Red Sandstone Slab",
                                            signName: "Cut Red Sandstone Slabs"
                                        }
                                    ]
                                },
                                {
                                    name: "Copper Slabs",
                                    upstreamName: "Copper",
                                    chests: [
                                        {
                                            name: "Cut Copper Slab",
                                            signName: "Cut"
                                        },
                                        {
                                            name: "Exposed Cut Copper Slab",
                                            signName: "Exposed Cut"
                                        },
                                        {
                                            name: "Weathered Cut Copper Slab",
                                            signName: "Weathered Cut"
                                        },
                                        {
                                            name: "Oxidized Cut Copper Slab",
                                            signName: "Oxidized Cut"
                                        },
                                        {
                                            name: "Waxed Cut Copper Slab",
                                            signName: "Waxed Cut"
                                        },
                                        {
                                            name: "Waxed Exposed Cut Copper Slab",
                                            signName: "Waxed Exposed Cut"
                                        },
                                        {
                                            name: "Waxed Weathered Cut Copper Slab",
                                            signName: "Waxed Weathered Cut"
                                        },
                                        {
                                            name: "Waxed Oxidized Cut Copper Slab",
                                            signName: "Waxed Oxidized Cut"
                                        }
                                    ]
                                },
                                {
                                    name: "Wood & Fungus Slabs",
                                    upstreamName: "Wood & Fungus",
                                    chests: [
                                        {
                                            name: "Oak Slab",
                                            signName: "Oak Slabs"
                                        },
                                        {
                                            name: "Birch Slab",
                                            signName: "Birch Slabs"
                                        },
                                        {
                                            name: "Spruce Slab",
                                            signName: "Spruce Slabs"
                                        },
                                        {
                                            name: "Acacia Slab",
                                            signName: "Acacia Slabs"
                                        },
                                        {
                                            name: "Jungle Slab",
                                            signName: "Jungle Slabs"
                                        },
                                        {
                                            name: "Dark Oak Slab",
                                            signName: "Dark Oak Slabs"
                                        },
                                        {
                                            name: "Pale Oak Slab",
                                            signName: "Pale Oak Slabs"
                                        },
                                        {
                                            name: "Crimson Slab",
                                            signName: "Crimson Slabs"
                                        },
                                        {
                                            name: "Warped Slab",
                                            signName: "Warped Slabs"
                                        },
                                        {
                                            name: "Mangrove Slab",
                                            signName: "Mangrove Slabs"
                                        },
                                        {
                                            name: "Cherry Slab",
                                            signName: "Cherry Slabs"
                                        },
                                        {
                                            name: "Bamboo Slab",
                                            signName: "Bamboo Slabs"
                                        },
                                        {
                                            name: "Wooden Slab",
                                            signName: "Petrified Oak Slabs"
                                        }
                                    ]
                                },
                                {
                                    name: "Other Slabs",
                                    upstreamName: "Other",
                                    chests: [
                                        {
                                            name: "Quartz Slab",
                                            signName: "Quartz Slabs"
                                        },
                                        {
                                            name: "Smooth Quartz Slab",
                                            signName: "Smooth Quartz Slabs"
                                        },
                                        {
                                            name: "Nether Brick Slab",
                                            signName: "Nether Brick Slabs"
                                        },
                                        {
                                            name: "Red Nether Brick Slab",
                                            signName: "Red Nether Brick Slabs"
                                        },
                                        {
                                            name: "Brick Slab",
                                            signName: "Brick Slabs"
                                        },
                                        {
                                            name: "Prismarine Brick Slab",
                                            signName: "Prismarine Brick Slabs"
                                        },
                                        {
                                            name: "Prismarine Slab",
                                            signName: "Prismarine Slabs"
                                        },
                                        {
                                            name: "Dark Prismarine Slab",
                                            signName: "Dark Prismarine Slabs"
                                        },
                                        {
                                            name: "End Stone Brick Slab",
                                            signName: "End Stone Brick Slabs"
                                        },
                                        {
                                            name: "Purpur Slab",
                                            signName: "Purpur Slabs"
                                        },
                                        {
                                            name: "Mud Brick Slab",
                                            signName: "Mud Brick Slabs"
                                        },
                                        {
                                            name: "Resin Brick Slab",
                                            signName: "Resin Brick Slabs"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Stairs",
                            subrooms: [
                                {
                                    name: "Stone Stairs",
                                    upstreamName: "Stone",
                                    chests: [
                                        {
                                            name: "Cobbled Deepslate Stairs"
                                        },
                                        {
                                            name: "Polished Deepslate Stairs"
                                        },
                                        {
                                            name: "Deepslate Brick Stairs"
                                        },
                                        {
                                            name: "Deepslate Tile Stairs"
                                        },
                                        {
                                            name: "Granite Stairs"
                                        },
                                        {
                                            name: "Polished Granite Stairs"
                                        },
                                        {
                                            name: "Diorite Stairs"
                                        },
                                        {
                                            name: "Polished Diorite Stairs"
                                        },
                                        {
                                            name: "Andesite Stairs"
                                        },
                                        {
                                            name: "Polished Andesite Stairs"
                                        },
                                        {
                                            name: "Stone Stairs"
                                        },
                                        {
                                            name: "Cobblestone Stairs"
                                        },
                                        {
                                            name: "Mossy Cobblestone Stairs",
                                            signName: "Mossy Cobble Stairs"
                                        },
                                        {
                                            name: "Stone Brick Stairs"
                                        },
                                        {
                                            name: "Blackstone Stairs"
                                        },
                                        {
                                            name: "Polished Blackstone Stairs"
                                        },
                                        {
                                            name: "Polished Blackstone Brick Stairs"
                                        },
                                        {
                                            name: "Tuff Stairs"
                                        },
                                        {
                                            name: "Polished Tuff Stairs"
                                        },
                                        {
                                            name: "Tuff Brick Stairs"
                                        }
                                    ]
                                },
                                {
                                    name: "Sandstone Stairs",
                                    upstreamName: "Sandstone",
                                    chests: [
                                        {
                                            name: "Sandstone Stairs"
                                        },
                                        {
                                            name: "Red Sandstone Stairs"
                                        },
                                        {
                                            name: "Smooth Sandstone Stairs"
                                        },
                                        {
                                            name: "Smooth Red Sandstone Stairs"
                                        }
                                    ]
                                },
                                {
                                    name: "Copper Stairs",
                                    upstreamName: "Copper",
                                    chests: [
                                        {
                                            name: "Cut Copper Stairs",
                                            signName: "Cut"
                                        },
                                        {
                                            name: "Exposed Cut Copper Stairs",
                                            signName: "Exposed Cut"
                                        },
                                        {
                                            name: "Weathered Cut Copper Stairs",
                                            signName: "Weathered Cut"
                                        },
                                        {
                                            name: "Oxidized Cut Copper Stairs",
                                            signName: "Oxidized Cut"
                                        },
                                        {
                                            name: "Waxed Cut Copper Stairs",
                                            signName: "Waxed Cut"
                                        },
                                        {
                                            name: "Waxed Exposed Cut Copper Stairs",
                                            signName: "Waxed Exposed Cut"
                                        },
                                        {
                                            name: "Waxed Weathered Cut Copper Stairs",
                                            signName: "Waxed Weathered Cut"
                                        },
                                        {
                                            name: "Waxed Oxidized Cut Copper Stairs",
                                            signName: "Waxed Oxidized Cut"
                                        }
                                    ]
                                },
                                {
                                    name: "Wood & Fungus Stairs",
                                    upstreamName: "Wood & Fungus",
                                    chests: [
                                        {
                                            name: "Oak Stairs"
                                        },
                                        {
                                            name: "Birch Stairs"
                                        },
                                        {
                                            name: "Spruce Stairs"
                                        },
                                        {
                                            name: "Acacia Stairs"
                                        },
                                        {
                                            name: "Jungle Stairs"
                                        },
                                        {
                                            name: "Dark Oak Stairs"
                                        },
                                        {
                                            name: "Pale Oak Stairs"
                                        },
                                        {
                                            name: "Crimson Stairs"
                                        },
                                        {
                                            name: "Warped Stairs"
                                        },
                                        {
                                            name: "Mangrove Stairs"
                                        },
                                        {
                                            name: "Cherry Stairs"
                                        },
                                        {
                                            name: "Bamboo Stairs"
                                        }
                                    ]
                                },
                                {
                                    name: "Other Stairs",
                                    upstreamName: "Other",
                                    chests: [
                                        {
                                            name: "Quartz Stairs"
                                        },
                                        {
                                            name: "Smooth Quartz Stairs"
                                        },
                                        {
                                            name: "Nether Brick Stairs"
                                        },
                                        {
                                            name: "Red Nether Brick Stairs"
                                        },
                                        {
                                            name: "Brick Stairs"
                                        },
                                        {
                                            name: "Prismarine Brick Stairs"
                                        },
                                        {
                                            name: "Prismarine Stairs"
                                        },
                                        {
                                            name: "Dark Prismarine Stairs"
                                        },
                                        {
                                            name: "End Stone Brick Stairs"
                                        },
                                        {
                                            name: "Purpur Stairs"
                                        },
                                        {
                                            name: "Mud Brick Stairs"
                                        },
                                        {
                                            name: "Resin Brick Stairs"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Plants & Fungi",
                    utilities: [
                        "Composter"
                    ],
                    subrooms: [
                        {
                            name: "Saplings & Other Baby Trees",
                            shortcutName: "Saplings",
                            shortcuts: [
                                {
                                    room: "Other Plants",
                                    items: [
                                        {
                                            name: "Bamboo"
                                        }
                                    ]
                                }
                            ],
                            chests: [
                                {
                                    name: "Oak Sapling",
                                    signName: "Oak Saplings"
                                },
                                {
                                    name: "Birch Sapling",
                                    signName: "Birch Saplings"
                                },
                                {
                                    name: "Spruce Sapling",
                                    signName: "Spruce Saplings"
                                },
                                {
                                    name: "Acacia Sapling",
                                    signName: "Acacia Saplings"
                                },
                                {
                                    name: "Jungle Sapling",
                                    signName: "Jungle Saplings"
                                },
                                {
                                    name: "Dark Oak Sapling",
                                    signName: "Dark Oak Saplings"
                                },
                                {
                                    name: "Pale Oak Sapling",
                                    signName: "Pale Oak Saplings"
                                },
                                {
                                    name: "Mangrove Propagule",
                                    signName: "Mangrove Propagules"
                                },
                                {
                                    name: "Crimson Fungus",
                                    signName: "Crimson Fungi"
                                },
                                {
                                    name: "Warped Fungus",
                                    signName: "Warped Fungi"
                                },
                                {
                                    name: "Cherry Sapling",
                                    signName: "Cherry Saplings"
                                },
                                {
                                    name: "Azalea",
                                    signName: "Azaleas"
                                },
                                {
                                    name: "Flowering Azalea",
                                    signName: "Flowering Azaleas"
                                }
                            ]
                        },
                        {
                            name: "Leaves",
                            shortcuts: [
                                {
                                    room: "Nether Fungi",
                                    items: [
                                        {
                                            name: "Nether Wart Block"
                                        },
                                        {
                                            name: "Warped Wart Block"
                                        }
                                    ],
                                    description: "Wart Blocks"
                                }
                            ],
                            chests: [
                                {
                                    name: "Oak Leaves"
                                },
                                {
                                    name: "Birch Leaves"
                                },
                                {
                                    name: "Spruce Leaves"
                                },
                                {
                                    name: "Acacia Leaves"
                                },
                                {
                                    name: "Jungle Leaves"
                                },
                                {
                                    name: "Dark Oak Leaves"
                                },
                                {
                                    name: "Pale Oak Leaves"
                                },
                                {
                                    name: "Mangrove Leaves"
                                },
                                {
                                    name: "Cherry Leaves"
                                },
                                {
                                    name: "Azalea Leaves"
                                },
                                {
                                    name: "Flowering Azalea Leaves"
                                },
                                {
                                    name: "Leaf Litter"
                                }
                            ]
                        },
                        {
                            name: "Flowers & Petals",
                            utilities: [
                                "Composter with Storage",
                                "Grass Field"
                            ],
                            shortcuts: [
                                {
                                    room: "End",
                                    items: [
                                        {
                                            name: "Chorus Flower"
                                        }
                                    ],
                                    description: "Chorus Flowers"
                                }
                            ],
                            chests: [
                                {
                                    name: "Cornflower",
                                    signName: "Cornflowers"
                                },
                                {
                                    name: "Lily of the Valley",
                                    signName: "Lilies of the Valley"
                                },
                                {
                                    name: "Dandelion",
                                    signName: "Dandelions"
                                },
                                {
                                    name: "Poppy",
                                    signName: "Poppies"
                                },
                                {
                                    name: "Blue Orchid",
                                    signName: "Blue Orchids"
                                },
                                {
                                    name: "Allium",
                                    signName: "Alliums"
                                },
                                {
                                    name: "Azure Bluet",
                                    signName: "Azure Bluets"
                                },
                                {
                                    name: "Oxeye Daisy",
                                    signName: "Oxeye Daisies"
                                },
                                {
                                    name: "Sunflower",
                                    signName: "Sunflowers"
                                },
                                {
                                    name: "Lilac",
                                    signName: "Lilacs"
                                },
                                {
                                    name: "Rose Bush",
                                    signName: "Rose Bushes"
                                },
                                {
                                    name: "Peony",
                                    signName: "Peonies"
                                },
                                {
                                    name: "Red Tulip",
                                    signName: "Red Tulips"
                                },
                                {
                                    name: "Orange Tulip",
                                    signName: "Orange Tulips"
                                },
                                {
                                    name: "White Tulip",
                                    signName: "White Tulips"
                                },
                                {
                                    name: "Pink Tulip",
                                    signName: "Pink Tulips"
                                },
                                {
                                    name: "Wither Rose",
                                    signName: "Wither Roses"
                                },
                                {
                                    name: "Pink Petals"
                                },
                                {
                                    name: "Torchflower",
                                    signName: "Torchflowers"
                                },
                                {
                                    name: "Open Eyeblossom",
                                    signName: "Open Eyeblossoms"
                                },
                                {
                                    name: "Closed Eyeblossom",
                                    signName: "Closed Eyeblossoms"
                                },
                                {
                                    name: "Wildflowers"
                                },
                                {
                                    "name": "Cactus Flower",
                                    signName: "Cactus Flowers"
                                }
                            ]
                        },
                        {
                            name: "Aquatic Plants",
                            upstreamName: "Aquatic",
                            chests: [
                                {
                                    name: "Kelp"
                                },
                                {
                                    name: "Dried Kelp Block",
                                    signName: "Dried Kelp Blocks"
                                },
                                {
                                    name: "Lily Pad",
                                    signName: "Lily Pads"
                                },
                                {
                                    name: "Sea Pickle",
                                    signName: "Sea Pickles"
                                },
                                {
                                    name: "Seagrass"
                                },
                                {
                                    name: "Tall Seagrass"
                                }
                            ]
                        },
                        {
                            name: "Fungi",
                            subrooms: [
                                {
                                    name: "Terrestrial Fungi",
                                    upstreamName: "Terrestrial",
                                    shortcutName: "Terrestrial Fungi",
                                    chests: [
                                        {
                                            name: "Red Mushroom",
                                            signName: "Red Mushroom Blocks"
                                        },
                                        {
                                            name: "Brown Mushroom",
                                            signName: "Brown Mushroom Blocks"
                                        },
                                        {
                                            name: "Mushroom",
                                            signName: "Mushroom Blocks"
                                        },
                                        {
                                            name: "Mushroom Stem",
                                            signName: "Mushroom Stems"
                                        },
                                        {
                                            name: "Red Mushroom Block",
                                            signName: "Red Mushroom Blocks"
                                        },
                                        {
                                            name: "Brown Mushroom Block",
                                            signName: "Brown Mushroom Blocks"
                                        }
                                    ]
                                },
                                {
                                    name: "Nether Fungi",
                                    upstreamName: "Nether",
                                    shortcutName: "Nether Fungi",
                                    shortcuts: [
                                        {
                                            room: "Wood",
                                            items: [
                                                {
                                                    name: "Crimson Stem"
                                                },
                                                {
                                                    name: "Stripped Crimson Stem"
                                                },
                                                {
                                                    name: "Crimson Hyphae"
                                                },
                                                {
                                                    name: "Stripped Crimson Hyphae"
                                                },
                                                {
                                                    name: "Crimson Planks"
                                                },
                                                {
                                                    name: "Warped Stem"
                                                },
                                                {
                                                    name: "Stripped Warped Stem"
                                                },
                                                {
                                                    name: "Warped Hyphae"
                                                },
                                                {
                                                    name: "Stripped Warped Hyphae"
                                                },
                                                {
                                                    name: "Warped Planks"
                                                }
                                            ],
                                            description: "Crimson/Warped Wood"
                                        },
                                        {
                                            room: "Saplings & Other Baby Trees",
                                            items: [
                                                {
                                                    name: "Crimson Fungus"
                                                },
                                                {
                                                    name: "Warped Fungus"
                                                }
                                            ],
                                            description: "Crimson/Warped Sapling Fungi"
                                        }
                                    ],
                                    chests: [
                                        {
                                            name: "Crimson Roots"
                                        },
                                        {
                                            name: "Warped Roots"
                                        },
                                        {
                                            name: "Nether Wart Block",
                                            signName: "Nether Wart Blocks"
                                        },
                                        {
                                            name: "Warped Wart Block",
                                            signName: "Warped Wart Blocks"
                                        },
                                        {
                                            name: "Weeping Vines"
                                        },
                                        {
                                            name: "Twisted Vines"
                                        },
                                        {
                                            name: "Crimson Nylium"
                                        },
                                        {
                                            name: "Warped Nylium"
                                        },
                                        {
                                            name: "Nether Sprout",
                                            signName: "Nether Sprouts"
                                        },
                                        {
                                            name: "Shroomlight",
                                            signName: "Shroomlights"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Fruit",
                            chests: [
                                {
                                    name: "Pumpkin",
                                    signName: "Pumpkins"
                                },
                                {
                                    name: "Melon",
                                    signName: "Melons"
                                },
                                {
                                    name: "Carved Pumpkin",
                                    signName: "Carved Pumpkins"
                                },
                                {
                                    name: "Jack-O-Lantern",
                                    signName: "Jack-O-Lanterns"
                                }
                            ]
                        },
                        {
                            name: "Weeds",
                            chests: [
                                {
                                    name: "Short Grass"
                                },
                                {
                                    name: "Tall Grass"
                                },
                                {
                                    name: "Short Dry Grass"
                                },
                                {
                                    name: "Tall Dry Grass"
                                },
                                {
                                    name: "Bush",
                                    signName: "Bushes"
                                },
                                {
                                    name: "Dead Bush",
                                    signName: "Dead Bushes"
                                },
                                {
                                    name: "Firefly Bush",
                                    signName: "Firefly Bushes"
                                },
                                {
                                    name: "Shrub",
                                    signName: "Shrubs"
                                },
                                {
                                    name: "Fern",
                                    signName: "Ferns"
                                },
                                {
                                    name: "Large Fern",
                                    signName: "Large Ferns"
                                }
                            ]
                        },
                        {
                            name: "Other Plants",
                            upstreamName: "Other",
                            shortcutName: "Misc. Plants",
                            shortcuts: [
                                {
                                    room: "End",
                                    items: [
                                        {
                                            name: "Chorus Plant"
                                        }
                                    ],
                                    description: "Chorus Plants"
                                }
                            ],
                            chests: [
                                {
                                    name: "Cactus",
                                    signName: "Cacti"
                                },
                                {
                                    name: "Bamboo"
                                },
                                {
                                    name: "Sugarcane"
                                },
                                {
                                    name: "Vines"
                                },
                                {
                                    name: "Cave Vines"
                                },
                                {
                                    name: "Moss Block",
                                    signName: "Moss Blocks"
                                },
                                {
                                    name: "Pale Moss Block",
                                    signName: "Pale Moss Blocks"
                                },
                                {
                                    name: "Moss Carpet",
                                    signName: "Moss Carpets"
                                },
                                {
                                    name: "Pale Moss Carpet",
                                    signName: "Pale Moss Carpets"
                                },
                                {
                                    name: "Pale Hanging Moss"
                                },
                                {
                                    name: "Mangrove Roots"
                                },
                                {
                                    name: "Muddy Mangrove Roots"
                                },
                                {
                                    name: "Hay Bale",
                                    signName: "Hay Bales"
                                },
                                {
                                    name: "Spore Blossom",
                                    signName: "Spore Blossoms"
                                },
                                {
                                    name: "Hanging Roots"
                                },
                                {
                                    name: "Glow Lichen"
                                },
                                {
                                    name: "Small Dripleaf",
                                    signName: "Small Dripleaves"
                                },
                                {
                                    name: "Big Dripleaf",
                                    signName: "Big Dripleaves"
                                },
                                {
                                    name: "Pitcher Plant",
                                    signName: "Pitcher Plants"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Interdimensional",
                    subrooms: [
                        {
                            name: "Nether",
                            utilities: [
                                "Nether Portal"
                            ],
                            shortcuts: [
                                {
                                    room: "Nether Fungi",
                                    items: [
                                        {
                                            name: "Crimson Roots"
                                        },
                                        {
                                            name: "Warped Roots"
                                        },
                                        {
                                            name: "Nether Wart Block"
                                        },
                                        {
                                            name: "Warped Wart Block"
                                        },
                                        {
                                            name: "Weeping Vines"
                                        },
                                        {
                                            name: "Twisted Vines"
                                        },
                                        {
                                            name: "Crimson Nylium"
                                        },
                                        {
                                            name: "Warped Nylium"
                                        },
                                        {
                                            name: "Nether Sprout"
                                        },
                                        {
                                            name: "Shroomlight"
                                        }
                                    ],
                                    description: "Fungi"
                                },
                                {
                                    room: "Wood",
                                    items: [
                                        {
                                            name: "Crimson Stem"
                                        },
                                        {
                                            name: "Stripped Crimson Stem"
                                        },
                                        {
                                            name: "Crimson Hyphae"
                                        },
                                        {
                                            name: "Stripped Crimson Hyphae"
                                        },
                                        {
                                            name: "Crimson Planks"
                                        },
                                        {
                                            name: "Warped Stem"
                                        },
                                        {
                                            name: "Stripped Warped Stem"
                                        },
                                        {
                                            name: "Warped Hyphae"
                                        },
                                        {
                                            name: "Stripped Warped Hyphae"
                                        },
                                        {
                                            name: "Warped Planks"
                                        }
                                    ],
                                    description: "Crimson/Warped Wood"
                                },
                                {
                                    room: "Saplings & Other Baby Trees",
                                    items: [
                                        {
                                            name: "Crimson Fungus"
                                        },
                                        {
                                            name: "Warped Fungus"
                                        }
                                    ],
                                    description: "Crimson/Warped Sapling Fungi"
                                },
                                {
                                    room: "Minerals",
                                    items: [
                                        {
                                            name: "Block of Quartz"
                                        },
                                        {
                                            name: "Smooth Quartz Block"
                                        },
                                        {
                                            name: "Chiseled Quartz Block"
                                        },
                                        {
                                            name: "Pillar Quartz Block"
                                        },
                                        {
                                            name: "Quartz Bricks"
                                        },
                                        {
                                            name: "Quartz Ore"
                                        },
                                        {
                                            name: "Block of Netherite"
                                        },
                                        {
                                            name: "Ancient Debris"
                                        },
                                        {
                                            name: "Nether Gold Ore"
                                        }
                                    ],
                                    description: "Quartz/Netherite/Ancient Debris/Nether Gold Ore"
                                },
                                {
                                    room: "Miscellaneous Blocks",
                                    items: [
                                        {
                                            name: "Crying Obsidian"
                                        }
                                    ]
                                },
                                {
                                    room: "Basalt",
                                    items: [
                                        {
                                            name: "Basalt"
                                        },
                                        {
                                            name: "Smooth Basalt"
                                        },
                                        {
                                            name: "Polished Basalt"
                                        }
                                    ],
                                    description: "Basalt"
                                }
                            ],
                            chests: [
                                {
                                    name: "Soul Soil"
                                },
                                {
                                    name: "Soul Sand"
                                },
                                {
                                    name: "Magma Block",
                                    signName: "Magma Blocks"
                                },
                                {
                                    name: "Netherrack",
                                    silo: 7
                                },
                                {
                                    name: "Nether Brick Block",
                                    signName: "Nether Brick Blocks"
                                },
                                {
                                    name: "Red Nether Brick Block",
                                    signName: "Red Nether Brick Blocks"
                                },
                                {
                                    name: "Chiseled Nether Brick Block",
                                    signName: "Chiseled Nether Brick Blocks"
                                },
                                {
                                    name: "Cracked Nether Brick Block",
                                    signName: "Cracked Nether Brick Blocks"
                                },
                                {
                                    name: "Glowstone"
                                },
                                {
                                    name: "Dried Ghast",
                                    signName: "Dried Ghasts"
                                }
                            ]
                        },
                        {
                            name: "End",
                            utilities: [
                                "End Portal"
                            ],
                            shortcuts: [
                                {
                                    room: "Storage",
                                    items: [
                                        {
                                            name: "Ender Chest"
                                        }
                                    ],
                                    description: "Ender Chests"
                                },
                                {
                                    room: "Shulker Boxes",
                                    items: [
                                        {
                                            name: "White Shulker Box"
                                        },
                                        {
                                            name: "Light Gray Shulker Box"
                                        },
                                        {
                                            name: "Gray Shulker Box"
                                        },
                                        {
                                            name: "Black Shulker Box"
                                        },
                                        {
                                            name: "Red Shulker Box"
                                        },
                                        {
                                            name: "Orange Shulker Box"
                                        },
                                        {
                                            name: "Yellow Shulker Box"
                                        },
                                        {
                                            name: "Lime Shulker Box"
                                        },
                                        {
                                            name: "Green Shulker Box"
                                        },
                                        {
                                            name: "Blue Shulker Box"
                                        },
                                        {
                                            name: "Light Blue Shulker Box"
                                        },
                                        {
                                            name: "Cyan Shulker Box"
                                        },
                                        {
                                            name: "Purple Shulker Box"
                                        },
                                        {
                                            name: "Magenta Shulker Box"
                                        },
                                        {
                                            name: "Pink Shulker Box"
                                        },
                                        {
                                            name: "Brown Shulker Box"
                                        }
                                    ],
                                    description: "Shulker Boxes"
                                }
                            ],
                            chests: [
                                {
                                    name: "End Stone"
                                },
                                {
                                    name: "End Stone Bricks"
                                },
                                {
                                    name: "Ender Crystal",
                                    signName: "Ender Crystals"
                                },
                                {
                                    name: "End Rod",
                                    signName: "End Rods"
                                },
                                {
                                    name: "Ender Dragon Egg",
                                    signName: "Ender Dragon Eggs"
                                },
                                {
                                    name: "Chorus Flower",
                                    signName: "Chorus Flowers"
                                },
                                {
                                    name: "Chorus Plant",
                                    signName: "Chorus Plants"
                                },
                                {
                                    name: "Purpur Block",
                                    signName: "Purpur Blocks"
                                },
                                {
                                    name: "Purpur Pillar",
                                    signName: "Purpur Pillars"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Chromatic",
                    subrooms: [
                        {
                            name: "Wool",
                            chests: [
                                {
                                    name: "White Wool"
                                },
                                {
                                    name: "Light Gray Wool"
                                },
                                {
                                    name: "Gray Wool"
                                },
                                {
                                    name: "Black Wool"
                                },
                                {
                                    name: "Red Wool"
                                },
                                {
                                    name: "Orange Wool"
                                },
                                {
                                    name: "Yellow Wool"
                                },
                                {
                                    name: "Lime Wool"
                                },
                                {
                                    name: "Green Wool"
                                },
                                {
                                    name: "Blue Wool"
                                },
                                {
                                    name: "Light Blue Wool"
                                },
                                {
                                    name: "Cyan Wool"
                                },
                                {
                                    name: "Purple Wool"
                                },
                                {
                                    name: "Magenta Wool"
                                },
                                {
                                    name: "Pink Wool"
                                },
                                {
                                    name: "Brown Wool"
                                }
                            ]
                        },
                        {
                            name: "Carpets",
                            shortcuts: [
                                {
                                    room: "Other Plants",
                                    description: "Moss Carpets",
                                    items: [
                                        {
                                            name: "Moss Carpet"
                                        },
                                        {
                                            name: "Pale Moss Carpet"
                                        }
                                    ]
                                }
                            ],
                            chests: [
                                {
                                    name: "White Carpet",
                                    signName: "White Carpets"
                                },
                                {
                                    name: "Light Gray Carpet",
                                    signName: "Light Gray Carpets"
                                },
                                {
                                    name: "Gray Carpet",
                                    signName: "Gray Carpets"
                                },
                                {
                                    name: "Black Carpet",
                                    signName: "Black Carpets"
                                },
                                {
                                    name: "Red Carpet",
                                    signName: "Red Carpets"
                                },
                                {
                                    name: "Orange Carpet",
                                    signName: "Orange Carpets"
                                },
                                {
                                    name: "Yellow Carpet",
                                    signName: "Yellow Carpets"
                                },
                                {
                                    name: "Lime Carpet",
                                    signName: "Lime Carpets"
                                },
                                {
                                    name: "Green Carpet",
                                    signName: "Green Carpets"
                                },
                                {
                                    name: "Blue Carpet",
                                    signName: "Blue Carpets"
                                },
                                {
                                    name: "Light Blue Carpet",
                                    signName: "Light Blue Carpets"
                                },
                                {
                                    name: "Cyan Carpet",
                                    signName: "Cyan Carpets"
                                },
                                {
                                    name: "Purple Carpet",
                                    signName: "Purple Carpets"
                                },
                                {
                                    name: "Magenta Carpet",
                                    signName: "Magenta Carpets"
                                },
                                {
                                    name: "Pink Carpet",
                                    signName: "Pink Carpets"
                                },
                                {
                                    name: "Brown Carpet",
                                    signName: "Brown Carpets"
                                }
                            ]
                        },
                        {
                            name: "Concrete Powder",
                            chests: [
                                {
                                    name: "White Concrete Powder"
                                },
                                {
                                    name: "Light Gray Concrete Powder"
                                },
                                {
                                    name: "Gray Concrete Powder"
                                },
                                {
                                    name: "Black Concrete Powder"
                                },
                                {
                                    name: "Red Concrete Powder"
                                },
                                {
                                    name: "Orange Concrete Powder"
                                },
                                {
                                    name: "Yellow Concrete Powder"
                                },
                                {
                                    name: "Lime Concrete Powder"
                                },
                                {
                                    name: "Green Concrete Powder"
                                },
                                {
                                    name: "Blue Concrete Powder"
                                },
                                {
                                    name: "Light Blue Concrete Powder"
                                },
                                {
                                    name: "Cyan Concrete Powder"
                                },
                                {
                                    name: "Purple Concrete Powder"
                                },
                                {
                                    name: "Magenta Concrete Powder"
                                },
                                {
                                    name: "Pink Concrete Powder"
                                },
                                {
                                    name: "Brown Concrete Powder"
                                }
                            ]
                        },
                        {
                            name: "Concrete",
                            chests: [
                                {
                                    name: "White Concrete"
                                },
                                {
                                    name: "Light Gray Concrete"
                                },
                                {
                                    name: "Gray Concrete"
                                },
                                {
                                    name: "Black Concrete"
                                },
                                {
                                    name: "Red Concrete"
                                },
                                {
                                    name: "Orange Concrete"
                                },
                                {
                                    name: "Yellow Concrete"
                                },
                                {
                                    name: "Lime Concrete"
                                },
                                {
                                    name: "Green Concrete"
                                },
                                {
                                    name: "Blue Concrete"
                                },
                                {
                                    name: "Light Blue Concrete"
                                },
                                {
                                    name: "Cyan Concrete"
                                },
                                {
                                    name: "Purple Concrete"
                                },
                                {
                                    name: "Magenta Concrete"
                                },
                                {
                                    name: "Pink Concrete"
                                },
                                {
                                    name: "Brown Concrete"
                                }
                            ]
                        },
                        {
                            name: "Beds",
                            chests: [
                                {
                                    name: "White Bed",
                                    signName: "White Beds"
                                },
                                {
                                    name: "Light Gray Bed",
                                    signName: "Light Gray Beds"
                                },
                                {
                                    name: "Gray Bed",
                                    signName: "Gray Beds"
                                },
                                {
                                    name: "Black Bed",
                                    signName: "Black Beds"
                                },
                                {
                                    name: "Red Bed",
                                    signName: "Red Beds"
                                },
                                {
                                    name: "Orange Bed",
                                    signName: "Orange Beds"
                                },
                                {
                                    name: "Yellow Bed",
                                    signName: "Yellow Beds"
                                },
                                {
                                    name: "Lime Bed",
                                    signName: "Lime Beds"
                                },
                                {
                                    name: "Green Bed",
                                    signName: "Green Beds"
                                },
                                {
                                    name: "Blue Bed",
                                    signName: "Blue Beds"
                                },
                                {
                                    name: "Light Blue Bed",
                                    signName: "Light Blue Beds"
                                },
                                {
                                    name: "Cyan Bed",
                                    signName: "Cyan Beds"
                                },
                                {
                                    name: "Purple Bed",
                                    signName: "Purple Beds"
                                },
                                {
                                    name: "Magenta Bed",
                                    signName: "Magenta Beds"
                                },
                                {
                                    name: "Pink Bed",
                                    signName: "Pink Beds"
                                },
                                {
                                    name: "Brown Bed",
                                    signName: "Brown Beds"
                                }
                            ]
                        },
                        {
                            name: "Shulker Boxes",
                            chests: [
                                {
                                    name: "Shulker Box",
                                    signName: "Shulker Boxes"
                                },
                                {
                                    name: "White Shulker Box",
                                    signName: "White Shulker Boxes"
                                },
                                {
                                    name: "Light Gray Shulker Box",
                                    signName: "Light Gray Shulker Boxes"
                                },
                                {
                                    name: "Gray Shulker Box",
                                    signName: "Gray Shulker Boxes"
                                },
                                {
                                    name: "Black Shulker Box",
                                    signName: "Black Shulker Boxes"
                                },
                                {
                                    name: "Red Shulker Box",
                                    signName: "Red Shulker Boxes"
                                },
                                {
                                    name: "Orange Shulker Box",
                                    signName: "Orange Shulker Boxes"
                                },
                                {
                                    name: "Yellow Shulker Box",
                                    signName: "Yellow Shulker Boxes"
                                },
                                {
                                    name: "Lime Shulker Box",
                                    signName: "Lime Shulker Boxes"
                                },
                                {
                                    name: "Green Shulker Box",
                                    signName: "Green Shulker Boxes"
                                },
                                {
                                    name: "Blue Shulker Box",
                                    signName: "Blue Shulker Boxes"
                                },
                                {
                                    name: "Light Blue Shulker Box",
                                    signName: "Light Blue Shulker Boxes"
                                },
                                {
                                    name: "Cyan Shulker Box",
                                    signName: "Cyan Shulker Boxes"
                                },
                                {
                                    name: "Purple Shulker Box",
                                    signName: "Purple Shulker Boxes"
                                },
                                {
                                    name: "Magenta Shulker Box",
                                    signName: "Magenta Shulker Boxes"
                                },
                                {
                                    name: "Pink Shulker Box",
                                    signName: "Pink Shulker Boxes"
                                },
                                {
                                    name: "Brown Shulker Box",
                                    signName: "Brown Shulker Boxes"
                                }
                            ]
                        },
                        {
                            name: "Candles",
                            chests: [
                                {
                                    name: "Candle",
                                    signName: "Candles"
                                },
                                {
                                    name: "White Candle",
                                    signName: "White Candles"
                                },
                                {
                                    name: "Light Gray Candle",
                                    signName: "Light Gray Candles"
                                },
                                {
                                    name: "Gray Candle",
                                    signName: "Gray Candles"
                                },
                                {
                                    name: "Black Candle",
                                    signName: "Black Candles"
                                },
                                {
                                    name: "Red Candle",
                                    signName: "Red Candles"
                                },
                                {
                                    name: "Orange Candle",
                                    signName: "Orange Candles"
                                },
                                {
                                    name: "Yellow Candle",
                                    signName: "Yellow Candles"
                                },
                                {
                                    name: "Lime Candle",
                                    signName: "Lime Candles"
                                },
                                {
                                    name: "Green Candle",
                                    signName: "Green Candles"
                                },
                                {
                                    name: "Blue Candle",
                                    signName: "Blue Candles"
                                },
                                {
                                    name: "Light Blue Candle",
                                    signName: "Light Blue Candles"
                                },
                                {
                                    name: "Cyan Candle",
                                    signName: "Cyan Candles"
                                },
                                {
                                    name: "Purple Candle",
                                    signName: "Purple Candles"
                                },
                                {
                                    name: "Magenta Candle",
                                    signName: "Magenta Candles"
                                },
                                {
                                    name: "Pink Candle",
                                    signName: "Pink Candles"
                                },
                                {
                                    name: "Brown Candle",
                                    signName: "Brown Candles"
                                }
                            ]
                        },
                        {
                            name: "Banners",
                            utilities: [
                                "Loom"
                            ],
                            chests: [
                                {
                                    name: "White Banner",
                                    signName: "White Banners"
                                },
                                {
                                    name: "Light Gray Banner",
                                    signName: "Light Gray Banners"
                                },
                                {
                                    name: "Gray Banner",
                                    signName: "Gray Banners"
                                },
                                {
                                    name: "Black Banner",
                                    signName: "Black Banners"
                                },
                                {
                                    name: "Red Banner",
                                    signName: "Red Banners"
                                },
                                {
                                    name: "Orange Banner",
                                    signName: "Orange Banners"
                                },
                                {
                                    name: "Yellow Banner",
                                    signName: "Yellow Banners"
                                },
                                {
                                    name: "Lime Banner",
                                    signName: "Lime Banners"
                                },
                                {
                                    name: "Green Banner",
                                    signName: "Green Banners"
                                },
                                {
                                    name: "Blue Banner",
                                    signName: "Blue Banners"
                                },
                                {
                                    name: "Light Blue Banner",
                                    signName: "Light Blue Banners"
                                },
                                {
                                    name: "Cyan Banner",
                                    signName: "Cyan Banners"
                                },
                                {
                                    name: "Purple Banner",
                                    signName: "Purple Banners"
                                },
                                {
                                    name: "Magenta Banner",
                                    signName: "Magenta Banners"
                                },
                                {
                                    name: "Pink Banner",
                                    signName: "Pink Banners"
                                },
                                {
                                    name: "Brown Banner",
                                    signName: "Brown Banners"
                                },
                                {
                                    name: "Illager Banner",
                                    signName: "Illager Banners"
                                }
                            ]
                        },
                        {
                            name: "Clay & Unglazed Terracotta",
                            chests: [
                                {
                                    name: "Clay"
                                },
                                {
                                    name: "Terracotta"
                                },
                                {
                                    name: "White Terracotta"
                                },
                                {
                                    name: "Light Gray Terracotta"
                                },
                                {
                                    name: "Gray Terracotta"
                                },
                                {
                                    name: "Black Terracotta"
                                },
                                {
                                    name: "Red Terracotta"
                                },
                                {
                                    name: "Orange Terracotta"
                                },
                                {
                                    name: "Yellow Terracotta"
                                },
                                {
                                    name: "Lime Terracotta"
                                },
                                {
                                    name: "Green Terracotta"
                                },
                                {
                                    name: "Blue Terracotta"
                                },
                                {
                                    name: "Light Blue Terracotta"
                                },
                                {
                                    name: "Cyan Terracotta"
                                },
                                {
                                    name: "Purple Terracotta"
                                },
                                {
                                    name: "Magenta Terracotta"
                                },
                                {
                                    name: "Pink Terracotta"
                                },
                                {
                                    name: "Brown Terracotta"
                                }
                            ]
                        },
                        {
                            name: "Glazed Terracotta",
                            chests: [
                                {
                                    name: "White Glazed Terracotta"
                                },
                                {
                                    name: "Light Gray Glazed Terracotta"
                                },
                                {
                                    name: "Gray Glazed Terracotta"
                                },
                                {
                                    name: "Black Glazed Terracotta"
                                },
                                {
                                    name: "Red Glazed Terracotta"
                                },
                                {
                                    name: "Orange Glazed Terracotta"
                                },
                                {
                                    name: "Yellow Glazed Terracotta"
                                },
                                {
                                    name: "Lime Glazed Terracotta"
                                },
                                {
                                    name: "Green Glazed Terracotta"
                                },
                                {
                                    name: "Blue Glazed Terracotta"
                                },
                                {
                                    name: "Light Blue Glazed Terracotta"
                                },
                                {
                                    name: "Cyan Glazed Terracotta"
                                },
                                {
                                    name: "Purple Glazed Terracotta"
                                },
                                {
                                    name: "Magenta Glazed Terracotta"
                                },
                                {
                                    name: "Pink Glazed Terracotta"
                                },
                                {
                                    name: "Brown Glazed Terracotta"
                                }
                            ]
                        },
                        {
                            name: "Glass",
                            chests: [
                                {
                                    name: "Glass"
                                },
                                {
                                    name: "Tinted Glass"
                                },
                                {
                                    name: "White Stained Glass",
                                    signName: "White Glass"
                                },
                                {
                                    name: "Light Gray Stained Glass",
                                    signName: "Light Gray Glass"
                                },
                                {
                                    name: "Gray Stained Glass",
                                    signName: "Gray Glass"
                                },
                                {
                                    name: "Black Stained Glass",
                                    signName: "Black Glass"
                                },
                                {
                                    name: "Red Stained Glass",
                                    signName: "Red Glass"
                                },
                                {
                                    name: "Orange Stained Glass",
                                    signName: "Orange Glass"
                                },
                                {
                                    name: "Yellow Stained Glass",
                                    signName: "Yellow Glass"
                                },
                                {
                                    name: "Lime Stained Glass",
                                    signName: "Lime Glass"
                                },
                                {
                                    name: "Green Stained Glass",
                                    signName: "Green Glass"
                                },
                                {
                                    name: "Blue Stained Glass",
                                    signName: "Blue Glass"
                                },
                                {
                                    name: "Light Blue Stained Glass",
                                    signName: "Light Blue Glass"
                                },
                                {
                                    name: "Cyan Stained Glass",
                                    signName: "Cyan Glass"
                                },
                                {
                                    name: "Purple Stained Glass",
                                    signName: "Purple Glass"
                                },
                                {
                                    name: "Magenta Stained Glass",
                                    signName: "Magenta Glass"
                                },
                                {
                                    name: "Pink Stained Glass",
                                    signName: "Pink Glass"
                                },
                                {
                                    name: "Brown Stained Glass",
                                    signName: "Brown Glass"
                                }
                            ]
                        },
                        {
                            name: "Glass Panes",
                            chests: [
                                {
                                    name: "Glass Pane",
                                    signName: "Glass Panes"
                                },
                                {
                                    name: "White Stained Glass Pane",
                                    signName: "White Glass Panes"
                                },
                                {
                                    name: "Light Gray Stained Glass Pane",
                                    signName: "Light Gray Glass Panes"
                                },
                                {
                                    name: "Gray Stained Glass Pane",
                                    signName: "Gray Glass Panes"
                                },
                                {
                                    name: "Black Stained Glass Pane",
                                    signName: "Black Glass Panes"
                                },
                                {
                                    name: "Red Stained Glass Pane",
                                    signName: "Red Glass Panes"
                                },
                                {
                                    name: "Orange Stained Glass Pane",
                                    signName: "Orange Glass Panes"
                                },
                                {
                                    name: "Yellow Stained Glass Pane",
                                    signName: "Yellow Glass Panes"
                                },
                                {
                                    name: "Lime Stained Glass Pane",
                                    signName: "Lime Glass Panes"
                                },
                                {
                                    name: "Green Stained Glass Pane",
                                    signName: "Green Glass Panes"
                                },
                                {
                                    name: "Blue Stained Glass Pane",
                                    signName: "Blue Glass Panes"
                                },
                                {
                                    name: "Light Blue Stained Glass Pane",
                                    signName: "Light Blue Glass Panes"
                                },
                                {
                                    name: "Cyan Stained Glass Pane",
                                    signName: "Cyan Glass Panes"
                                },
                                {
                                    name: "Purple Stained Glass Pane",
                                    signName: "Purple Glass Panes"
                                },
                                {
                                    name: "Magenta Stained Glass Pane",
                                    signName: "Magenta Glass Panes"
                                },
                                {
                                    name: "Pink Stained Glass Pane",
                                    signName: "Pink Glass Panes"
                                },
                                {
                                    name: "Brown Stained Glass Pane",
                                    signName: "Brown Glass Panes"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Mechanical",
                    subrooms: [
                        {
                            name: "Power Sources",
                            shortcuts: [
                                {
                                    room: "Miscellaneous Items",
                                    items: [
                                        {
                                            name: "String"
                                        }
                                    ],
                                    description: "Tripwire"
                                },
                                {
                                    room: "Mineral Blocks",
                                    items: [
                                        {
                                            name: "Block of Redstone"
                                        }
                                    ],
                                    description: "Redstone Blocks"
                                },
                                {
                                    room: "Sculks",
                                    items: [
                                        {
                                            name: "Sculk Sensor"
                                        },
                                        {
                                            name: "Calibrated Sculk Sensor"
                                        }
                                    ],
                                    description: "Sculk Sensors"
                                },
                                {
                                    room: "Rails",
                                    items: [
                                        {
                                            name: "Detector Rail"
                                        }
                                    ],
                                    description: "Detector Rails"
                                },
                                {
                                    room: "Storage",
                                    items: [
                                        {
                                            name: "Trapped Chest"
                                        }
                                    ],
                                    description: "Trapped Chests"
                                },
                                {
                                    room: "Misc. Utilities",
                                    items: [
                                        {
                                            name: "Jukebox"
                                        },
                                        {
                                            name: "Lectern"
                                        }
                                    ],
                                    description: "Jukeboxes/Lecterns"
                                }
                            ],
                            chests: [
                                {
                                    name: "Lever",
                                    signName: "Levers"
                                },
                                {
                                    name: "Tripwire Hook",
                                    signName: "Tripwire Hooks"
                                },
                                {
                                    name: "Target",
                                    signName: "Targets"
                                },
                                {
                                    name: "Redstone Torch",
                                    signName: "Redstone Torches"
                                },
                                {
                                    name: "Daylight Sensor",
                                    signName: "Daylight Sensors"
                                },
                                {
                                    name: "Observer",
                                    signName: "Observers"
                                },
                                {
                                    name: "Lightning Rod",
                                    signName: "Lightning Rods"
                                }
                            ],
                            subrooms: [
                                {
                                    name: "Buttons",
                                    chests: [
                                        {
                                            name: "Oak Button",
                                            signName: "Oak Buttons"
                                        },
                                        {
                                            name: "Birch Button",
                                            signName: "Birch Buttons"
                                        },
                                        {
                                            name: "Spruce Button",
                                            signName: "Spruce Buttons"
                                        },
                                        {
                                            name: "Acacia Button",
                                            signName: "Acacia Buttons"
                                        },
                                        {
                                            name: "Jungle Button",
                                            signName: "Jungle Buttons"
                                        },
                                        {
                                            name: "Dark Oak Button",
                                            signName: "Dark Oak Buttons"
                                        },
                                        {
                                            name: "Pale Oak Button",
                                            signName: "Pale Oak Buttons"
                                        },
                                        {
                                            name: "Crimson Button",
                                            signName: "Crimson Buttons"
                                        },
                                        {
                                            name: "Warped Button",
                                            signName: "Warped Buttons"
                                        },
                                        {
                                            name: "Mangrove Button",
                                            signName: "Mangrove Buttons"
                                        },
                                        {
                                            name: "Bamboo Button",
                                            signName: "Bamboo Buttons"
                                        },
                                        {
                                            name: "Cherry Button",
                                            signName: "Cherry Buttons"
                                        },
                                        {
                                            name: "Stone Button",
                                            signName: "Stone Buttons"
                                        },
                                        {
                                            name: "Polished Blackstone Button",
                                            signName: "Polished Blackstone Buttons"
                                        }
                                    ]
                                },
                                {
                                    name: "Pressure Plates",
                                    chests: [
                                        {
                                            name: "Oak Pressure Plate",
                                            signName: "Oak Pressure Plates"
                                        },
                                        {
                                            name: "Birch Pressure Plate",
                                            signName: "Birch Pressure Plates"
                                        },
                                        {
                                            name: "Spruce Pressure Plate",
                                            signName: "Spruce Pressure Plates"
                                        },
                                        {
                                            name: "Acacia Pressure Plate",
                                            signName: "Acacia Pressure Plates"
                                        },
                                        {
                                            name: "Jungle Pressure Plate",
                                            signName: "Jungle Pressure Plates"
                                        },
                                        {
                                            name: "Dark Oak Pressure Plate",
                                            signName: "Dark Oak Pressure Plates"
                                        },
                                        {
                                            name: "Pale Oak Pressure Plate",
                                            signName: "Pale Oak Pressure Plates"
                                        },
                                        {
                                            name: "Crimson Pressure Plate",
                                            signName: "Crimson Pressure Plates"
                                        },
                                        {
                                            name: "Warped Pressure Plate",
                                            signName: "Warped Pressure Plates"
                                        },
                                        {
                                            name: "Mangrove Pressure Plate",
                                            signName: "Mangrove Pressure Plates"
                                        },
                                        {
                                            name: "Bamboo Pressure Plate",
                                            signName: "Bamboo Pressure Plates"
                                        },
                                        {
                                            name: "Cherry Pressure Plate",
                                            signName: "Cherry Pressure Plates"
                                        },
                                        {
                                            name: "Stone Pressure Plate",
                                            signName: "Stone Pressure Plates"
                                        },
                                        {
                                            name: "Polished Blackstone Pressure Plate",
                                            signName: "Polished B.stone Pressure Plates"
                                        },
                                        {
                                            name: "Heavy Weighted Pressure Plate",
                                            signName: "Iron Weighted Pressure Plates"
                                        },
                                        {
                                            name: "Light Weighted Pressure Plate",
                                            signName: "Gold Weighted Pressure Plates"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Transmitters",
                            chests: [
                                {
                                    name: "Redstone Repeater",
                                    signName: "Repeaters"
                                },
                                {
                                    name: "Redstone Comparator",
                                    signName: "Comparators"
                                },
                                {
                                    name: "Redstone Dust",
                                    signName: "Redstone"
                                }
                            ]
                        },
                        {
                            name: "Devices",
                            shortcutName: "Redstone Devices",
                            downstreamName: "Redstone Devices",
                            shortcuts: [
                                {
                                    room: "Rails",
                                    items: [
                                        {
                                            name: "Powered Rail"
                                        },
                                        {
                                            name: "Activator Rail"
                                        }
                                    ],
                                    description: "Powered/Activator Rails"
                                }
                            ],
                            chests: [
                                {
                                    name: "Piston",
                                    signName: "Pistons"
                                },
                                {
                                    name: "Sticky Piston",
                                    signName: "Sticky Pistons"
                                },
                                {
                                    name: "Dropper",
                                    signName: "Droppers"
                                },
                                {
                                    name: "Hopper",
                                    signName: "Hoppers"
                                },
                                {
                                    name: "Dispenser",
                                    signName: "Dispensers"
                                },
                                {
                                    name: "TNT"
                                },
                                {
                                    name: "Note Block",
                                    signName: "Note Blocks"
                                },
                                {
                                    name: "Crafter",
                                    signName: "Crafters"
                                }
                            ],
                            subrooms: [
                                {
                                    name: "Lights",
                                    chests: [
                                        {
                                            name: "Redstone Lamp",
                                            signName: "Redstone Lamps"
                                        },
                                        {
                                            name: "Copper Bulb",
                                            signName: "Copper Bulbs"
                                        },
                                        {
                                            name: "Exposed Copper Bulb",
                                            signName: "Exposed Copper Bulbs"
                                        },
                                        {
                                            name: "Weathered Copper Bulb",
                                            signName: "Weathered Copper Bulbs"
                                        },
                                        {
                                            name: "Oxidized Copper Bulb",
                                            signName: "Oxidized Copper Bulbs"
                                        },
                                        {
                                            name: "Waxed Copper Bulb",
                                            signName: "Waxed Copper Bulbs"
                                        },
                                        {
                                            name: "Waxed Exposed Copper Bulb",
                                            signName: "Waxed Exposed Copper Bulbs"
                                        },
                                        {
                                            name: "Waxed Weathered Copper Bulb",
                                            signName: "Waxed Weathered Copper Bulbs"
                                        },
                                        {
                                            name: "Waxed Oxidized Copper Bulb",
                                            signName: "Waxed Oxidized Copper Bulbs"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Aquatic Blocks",
                    upstreamName: "Aquatic",
                    subrooms: [
                        {
                            name: "Coral Fans",
                            chests: [
                                {
                                    name: "Tube Coral Fan",
                                    signName: "Tube Coral Fans"
                                },
                                {
                                    name: "Dead Tube Coral Fan",
                                    signName: "Dead Tube Coral Fans"
                                },
                                {
                                    name: "Brain Coral Fan",
                                    signName: "Brain Coral Fans"
                                },
                                {
                                    name: "Dead Brain Coral Fan",
                                    signName: "Dead Brain Coral Fans"
                                },
                                {
                                    name: "Bubble Coral Fan",
                                    signName: "Bubble Coral Fans"
                                },
                                {
                                    name: "Dead Bubble Coral Fan",
                                    signName: "Dead Bubble Coral Fans"
                                },
                                {
                                    name: "Fire Coral Fan",
                                    signName: "Fire Coral Fans"
                                },
                                {
                                    name: "Dead Fire Coral Fan",
                                    signName: "Dead Fire Coral Fans"
                                },
                                {
                                    name: "Horn Coral Fan",
                                    signName: "Horn Coral Fans"
                                },
                                {
                                    name: "Dead Horn Coral Fan",
                                    signName: "Dead Horn Coral Fans"
                                }
                            ]
                        },
                        {
                            name: "Coral",
                            chests: [
                                {
                                    name: "Tube Coral"
                                },
                                {
                                    name: "Dead Tube Coral"
                                },
                                {
                                    name: "Brain Coral"
                                },
                                {
                                    name: "Dead Brain Coral"
                                },
                                {
                                    name: "Bubble Coral"
                                },
                                {
                                    name: "Dead Bubble Coral"
                                },
                                {
                                    name: "Fire Coral"
                                },
                                {
                                    name: "Dead Fire Coral"
                                },
                                {
                                    name: "Horn Coral"
                                },
                                {
                                    name: "Dead Horn Coral"
                                }
                            ]
                        },
                        {
                            name: "Coral Blocks",
                            chests: [
                                {
                                    name: "Tube Coral Block",
                                    signName: "Tube Coral Blocks"
                                },
                                {
                                    name: "Dead Tube Coral Block",
                                    signName: "Dead Tube Coral Blocks"
                                },
                                {
                                    name: "Brain Coral Block",
                                    signName: "Brain Coral Blocks"
                                },
                                {
                                    name: "Dead Brain Coral Block",
                                    signName: "Dead Brain Coral Blocks"
                                },
                                {
                                    name: "Bubble Coral Block",
                                    signName: "Bubble Coral Blocks"
                                },
                                {
                                    name: "Dead Bubble Coral Block",
                                    signName: "Dead Bubble Coral Blocks"
                                },
                                {
                                    name: "Fire Coral Block",
                                    signName: "Fire Coral Blocks"
                                },
                                {
                                    name: "Dead Fire Coral Block",
                                    signName: "Dead Fire Coral Blocks"
                                },
                                {
                                    name: "Horn Coral Block",
                                    signName: "Horn Coral Blocks"
                                },
                                {
                                    name: "Dead Horn Coral Block",
                                    signName: "Dead Horn Coral Blocks"
                                }
                            ]
                        },
                        {
                            name: "Misc. Aquatic Blocks",
                            upstreamName: "Other",
                            shortcutName: "Misc. Aquatic",
                            shortcuts: [
                                {
                                    room: "Other Plants",
                                    items: [
                                        {
                                            name: "Sea Pickle"
                                        }
                                    ]
                                }
                            ],
                            chests: [
                                {
                                    name: "Prismarine"
                                },
                                {
                                    name: "Prismarine Bricks"
                                },
                                {
                                    name: "Dark Prismarine"
                                },
                                {
                                    name: "Sea Lantern",
                                    signName: "Sea Lanterns"
                                },
                                {
                                    name: "Sponge",
                                    signName: "Sponges"
                                },
                                {
                                    name: "Wet Sponge",
                                    signName: "Wet Sponges"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Utilities",
                    subrooms: [
                        {
                            name: "Crafting",
                            chests: [
                                {
                                    name: "Crafting Table",
                                    signName: "Crafting Tables"
                                },
                                {
                                    name: "Stonecutter",
                                    signName: "Stonecutters"
                                },
                                {
                                    name: "Loom",
                                    signName: "Looms"
                                },
                                {
                                    name: "Cartography Table",
                                    signName: "Cartography Tables"
                                },
                                {
                                    name: "Smithing Table",
                                    signName: "Smithing Tables"
                                },
                                {
                                    name: "Fletching Table",
                                    signName: "Fletching Tables"
                                }
                            ]
                        },
                        {
                            name: "Processing",
                            chests: [
                                {
                                    name: "Furnace",
                                    signName: "Furni"
                                },
                                {
                                    name: "Blast Furnace",
                                    signName: "Blast Furni"
                                },
                                {
                                    name: "Campfire",
                                    signName: "Campfires"
                                },
                                {
                                    name: "Soul Campfire",
                                    signName: "Soul Campfires"
                                },
                                {
                                    name: "Brewing Stand",
                                    signName: "Brewing Stands"
                                },
                                {
                                    name: "Composter",
                                    signName: "Composters"
                                },
                                {
                                    name: "Smoker",
                                    signName: "Smokers"
                                }
                            ]
                        },
                        {
                            name: "Storage",
                            shortcuts: [
                                {
                                    room: "Shulker Boxes",
                                    items: [
                                        {
                                            name: "Shulker Box"
                                        },
                                        {
                                            name: "White Shulker Box"
                                        },
                                        {
                                            name: "Light Gray Shulker Box"
                                        },
                                        {
                                            name: "Gray Shulker Box"
                                        },
                                        {
                                            name: "Black Shulker Box"
                                        },
                                        {
                                            name: "Red Shulker Box"
                                        },
                                        {
                                            name: "Orange Shulker Box"
                                        },
                                        {
                                            name: "Yellow Shulker Box"
                                        },
                                        {
                                            name: "Lime Shulker Box"
                                        },
                                        {
                                            name: "Green Shulker Box"
                                        },
                                        {
                                            name: "Blue Shulker Box"
                                        },
                                        {
                                            name: "Light Blue Shulker Box"
                                        },
                                        {
                                            name: "Cyan Shulker Box"
                                        },
                                        {
                                            name: "Purple Shulker Box"
                                        },
                                        {
                                            name: "Magenta Shulker Box"
                                        },
                                        {
                                            name: "Pink Shulker Box"
                                        },
                                        {
                                            name: "Brown Shulker Box"
                                        }
                                    ],
                                    description: "Shulker Boxes"
                                }
                            ],
                            chests: [
                                {
                                    name: "Chest",
                                    signName: "Chests"
                                },
                                {
                                    name: "Trapped Chest",
                                    signName: "Trapped Chests"
                                },
                                {
                                    name: "Ender Chest",
                                    signName: "Ender Chests"
                                },
                                {
                                    name: "Barrel",
                                    signName: "Barrels"
                                },
                                {
                                    name: "Cauldron",
                                    signName: "Cauldrons"
                                },
                                {
                                    name: "Chiseled Bookshelf",
                                    signName: "Chiseled Bookshelves"
                                }
                            ]
                        },
                        {
                            name: "Enchanting",
                            shortcuts: [
                                {
                                    room: "Decorative",
                                    items: [
                                        {
                                            name: "Bookshelf"
                                        }
                                    ],
                                    description: "Bookshelves"
                                }
                            ],
                            chests: [
                                {
                                    name: "Enchantment Table",
                                    signName: "Enchantment Tables"
                                },
                                {
                                    name: "Grindstone",
                                    signName: "Grindstones"
                                },
                                {
                                    name: "Anvil",
                                    signName: "Anvils"
                                },
                                {
                                    name: "Slightly Damaged Anvil",
                                    signName: "Slightly Damaged Anvils"
                                },
                                {
                                    name: "Very Damaged Anvil",
                                    signName: "Very Damaged Anvils"
                                }
                            ]
                        },
                        {
                            name: "Misc. Utilities",
                            upstreamName: "Other",
                            chests: [
                                {
                                    name: "Jukebox",
                                    signName: "Jukeboxes"
                                },
                                {
                                    name: "Bell",
                                    signName: "Bells"
                                },
                                {
                                    name: "Lodestone",
                                    signName: "Lodestones"
                                },
                                {
                                    name: "Respawn Anchor",
                                    signName: "Respawn Anchors"
                                },
                                {
                                    name: "Beacon",
                                    signName: "Beacons"
                                },
                                {
                                    name: "Conduit",
                                    signName: "Conduits"
                                },
                                {
                                    name: "Lectern",
                                    signName: "Lecterns"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Transportation",
                    subrooms: [
                        {
                            name: "Rails",
                            chests: [
                                {
                                    name: "Rail",
                                    signName: "Rails"
                                },
                                {
                                    name: "Powered Rail",
                                    signName: "Powered Rails"
                                },
                                {
                                    name: "Detector Rail",
                                    signName: "Detector Rails"
                                },
                                {
                                    name: "Activator Rail",
                                    signName: "Activator Rails"
                                }
                            ]
                        },
                        {
                            name: "Boats & Rafts",
                            chests: [
                                {
                                    name: "Oak Boat",
                                    signName: "Oak Boats"
                                },
                                {
                                    name: "Oak Boat with Chest",
                                    signName: "Oak Boats with Chests"
                                },
                                {
                                    name: "Birch Boat",
                                    signName: "Birch Boats"
                                },
                                {
                                    name: "Birch Boat with Chest",
                                    signName: "Birch Boats with Chests"
                                },
                                {
                                    name: "Spruce Boat",
                                    signName: "Spruce Boats"
                                },
                                {
                                    name: "Spruce Boat with Chest",
                                    signName: "Spruce Boats with Chests"
                                },
                                {
                                    name: "Acacia Boat",
                                    signName: "Acacia Boats"
                                },
                                {
                                    name: "Acacia Boat with Chest",
                                    signName: "Acacia Boats with Chests"
                                },
                                {
                                    name: "Jungle Boat",
                                    signName: "Jungle Boats"
                                },
                                {
                                    name: "Jungle Boat with Chest",
                                    signName: "Jungle Boats with Chests"
                                },
                                {
                                    name: "Dark Oak Boat",
                                    signName: "Dark Oak Boats"
                                },
                                {
                                    name: "Dark Oak Boat with Chest",
                                    signName: "Dark Oak Boats with Chests"
                                },
                                {
                                    name: "Pale Oak Boat",
                                    signName: "Pale Oak Boats"
                                },
                                {
                                    name: "Pale Oak Boat with Chest",
                                    signName: "Pale Oak Boats with Chests"
                                },
                                {
                                    name: "Crimson Boat",
                                    signName: "Crimson Boats"
                                },
                                {
                                    name: "Crimson Boat with Chest",
                                    signName: "Crimson Boats with Chests"
                                },
                                {
                                    name: "Warped Boat",
                                    signName: "Warped Boats"
                                },
                                {
                                    name: "Warped Boat with Chest",
                                    signName: "Warped Boats with Chests"
                                },
                                {
                                    name: "Mangrove Boat",
                                    signName: "Mangrove Boats"
                                },
                                {
                                    name: "Mangrove Boat with Chest",
                                    signName: "Mangrove Boats with Chests"
                                },
                                {
                                    name: "Cherry Boat",
                                    signName: "Cherry Boats"
                                },
                                {
                                    name: "Cherry Boat with Chest",
                                    signName: "Cherry Boats with Chests"
                                },
                                {
                                    name: "Bamboo Raft",
                                    signName: "Bamboo Rafts"
                                },
                                {
                                    name: "Bamboo Raft with Chest",
                                    signName: "Bamboo Rafts with Chests"
                                }
                            ]
                        },
                        {
                            name: "Minecarts",
                            chests: [
                                {
                                    name: "Minecart",
                                    signName: "Minecarts"
                                },
                                {
                                    name: "Minecart with TNT",
                                    signName: "Minecarts with TNT"
                                },
                                {
                                    name: "Minecart with Chest",
                                    signName: "Minecarts with Chests"
                                },
                                {
                                    name: "Minecart with Hopper",
                                    signName: "Minecarts with Hoppers"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Other Blocks",
                    upstreamName: "Other",
                    downstreamName: "Other Blocks",
                    utilities: [
                        "Crafting Table",
                        "Furnace"
                    ],
                    subrooms: [
                        {
                            name: "Beekeeping",
                            chests: [
                                {
                                    name: "Bee Nest",
                                    signName: "Bee Nests"
                                },
                                {
                                    name: "Beehive",
                                    signName: "Beehives"
                                },
                                {
                                    name: "Honey Block",
                                    signName: "Honey Blocks"
                                },
                                {
                                    name: "Honeycomb Block",
                                    signName: "Honeycomb Blocks"
                                }
                            ]
                        },
                        {
                            name: "Heads",
                            chests: [
                                {
                                    name: "Zombie Head",
                                    signName: "Zombie Heads"
                                },
                                {
                                    name: "Creeper Head",
                                    signName: "Creeper Heads"
                                },
                                {
                                    name: "Ender Dragon Head",
                                    signName: "Ender Dragon Heads"
                                },
                                {
                                    name: "Skeleton Skull",
                                    signName: "Skeleton Heads"
                                },
                                {
                                    name: "Wither Skeleton Skull",
                                    signName: "Wither Skeleton Heads"
                                },
                                {
                                    name: "Piglin Head",
                                    signName: "Piglin Heads"
                                }
                            ]
                        },
                        {
                            name: "Froglights",
                            chests: [
                                {
                                    name: "Pearlescent Froglight",
                                    signName: "Pearlescent Froglights"
                                },
                                {
                                    name: "Ochre Froglight",
                                    signName: "Ochre Froglights"
                                },
                                {
                                    name: "Verdant Froglight",
                                    signName: "Verdant Froglights"
                                }
                            ]
                        },
                        {
                            name: "Sculks",
                            chests: [
                                {
                                    name: "Sculk",
                                    signName: "Sculks"
                                },
                                {
                                    name: "Sculk Catalyst",
                                    signName: "Sculk Catalysts"
                                },
                                {
                                    name: "Sculk Vein",
                                    signName: "Sculk Veins"
                                },
                                {
                                    name: "Sculk Sensor",
                                    signName: "Sculk Sensors"
                                },
                                {
                                    name: "Sculk Shrieker",
                                    signName: "Sculk Shriekers"
                                },
                                {
                                    name: "Calibrated Sculk Sensor",
                                    signName: "Calibrated Sculk Sensors"
                                }
                            ]
                        },
                        {
                            name: "Arctic",
                            chests: [
                                {
                                    name: "Ice"
                                },
                                {
                                    name: "Packed Ice"
                                },
                                {
                                    name: "Blue Ice"
                                },
                                {
                                    name: "Snow Block",
                                    signName: "Snow Blocks"
                                },
                                {
                                    name: "Snow Layer",
                                    signName: "Snow Layers"
                                }
                            ]
                        },
                        {
                            name: "Decorative",
                            chests: [
                                {
                                    name: "Chain",
                                    signName: "Chains"
                                },
                                {
                                    name: "Flower Pot",
                                    signName: "Flower Pots"
                                },
                                {
                                    name: "Bookshelf",
                                    signName: "Bookshelves"
                                },
                                {
                                    name: "Painting",
                                    signName: "Paintings"
                                },
                                {
                                    name: "Item Frame",
                                    signName: "Item Frames"
                                },
                                {
                                    name: "Glow Item Frame",
                                    signName: "Glow Item Frames"
                                },
                                {
                                    name: "Armor Stand",
                                    signName: "Armor Stands"
                                },
                                {
                                    name: "Decorated Pot",
                                    signName: "Decorated Pots"
                                }
                            ],
                            subrooms: [
                                {
                                    name: "Signs",
                                    chests: [
                                        {
                                            name: "Oak Sign",
                                            signName: "Oak Signs"
                                        },
                                        {
                                            name: "Birch Sign",
                                            signName: "Birch Signs"
                                        },
                                        {
                                            name: "Spruce Sign",
                                            signName: "Spruce Signs"
                                        },
                                        {
                                            name: "Acacia Sign",
                                            signName: "Acacia Signs"
                                        },
                                        {
                                            name: "Jungle Sign",
                                            signName: "Jungle Signs"
                                        },
                                        {
                                            name: "Dark Oak Sign",
                                            signName: "Dark Oak Signs"
                                        },
                                        {
                                            name: "Pale Oak Sign",
                                            signName: "Pale Oak Signs"
                                        },
                                        {
                                            name: "Mangrove Sign",
                                            signName: "Mangrove Signs"
                                        },
                                        {
                                            name: "Crimson Sign",
                                            signName: "Crimson Signs"
                                        },
                                        {
                                            name: "Warped Sign",
                                            signName: "Warped Signs"
                                        },
                                        {
                                            name: "Cherry Sign",
                                            signName: "Cherry Signs"
                                        },
                                        {
                                            name: "Bamboo Sign",
                                            signName: "Bamboo Signs"
                                        },
                                        {
                                            name: "Oak Hanging Sign",
                                            signName: "Oak Hanging Signs"
                                        },
                                        {
                                            name: "Birch Hanging Sign",
                                            signName: "Birch Hanging Signs"
                                        },
                                        {
                                            name: "Spruce Hanging Sign",
                                            signName: "Spruce Hanging Signs"
                                        },
                                        {
                                            name: "Acacia Hanging Sign",
                                            signName: "Acacia Hanging Signs"
                                        },
                                        {
                                            name: "Jungle Hanging Sign",
                                            signName: "Jungle Hanging Signs"
                                        },
                                        {
                                            name: "Dark Oak Hanging Sign",
                                            signName: "Dark Oak Hanging Signs"
                                        },
                                        {
                                            name: "Pale Oak Hanging Sign",
                                            signName: "Pale Oak Hanging Signs"
                                        },
                                        {
                                            name: "Mangrove Hanging Sign",
                                            signName: "Mangrove Hanging Signs"
                                        },
                                        {
                                            name: "Crimson Hanging Sign",
                                            signName: "Crimson Hanging Signs"
                                        },
                                        {
                                            name: "Warped Hanging Sign",
                                            signName: "Warped Hanging Signs"
                                        },
                                        {
                                            name: "Cherry Hanging Sign",
                                            signName: "Cherry Hanging Signs"
                                        },
                                        {
                                            name: "Bamboo Hanging Sign",
                                            signName: "Bamboo Hanging Signs"
                                        }
                                    ]
                                },
                                {
                                    name: "Copper Grates",
                                    chests: [
                                        {
                                            name: "Copper Grate",
                                            signName: "Regular"
                                        },
                                        {
                                            name: "Exposed Copper Grate",
                                            signName: "Exposed"
                                        },
                                        {
                                            name: "Weathered Copper Grate",
                                            signName: "Weathered"
                                        },
                                        {
                                            name: "Oxidized Copper Grate",
                                            signName: "Oxidized"
                                        },
                                        {
                                            name: "Waxed Copper Grate",
                                            signName: "Waxed"
                                        },
                                        {
                                            name: "Waxed Exposed Copper Grate",
                                            signName: "Waxed Exposed"
                                        },
                                        {
                                            name: "Waxed Weathered Copper Grate",
                                            signName: "Waxed Weathered"
                                        },
                                        {
                                            name: "Waxed Oxidized Copper Grate",
                                            signName: "Waxed Oxidized"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Miscellaneous Blocks",
                            upstreamName: "Miscellaneous",
                            shortcutName: "Misc. Blocks",
                            chests: [
                                {
                                    name: "Torch",
                                    signName: "Torches"
                                },
                                {
                                    name: "Soul Torch",
                                    signName: "Soul Torches"
                                },
                                {
                                    name: "Lantern",
                                    signName: "Lanterns"
                                },
                                {
                                    name: "Soul Lantern",
                                    signName: "Soul Lanterns"
                                },
                                {
                                    name: "Slime Block",
                                    signName: "Slime Blocks"
                                },
                                {
                                    name: "Bone Block",
                                    signName: "Bone Blocks"
                                },
                                {
                                    name: "Cobweb",
                                    signName: "Cobwebs"
                                },
                                {
                                    name: "tile.info_update.name",
                                    signName: "tile.info_update.names"
                                },
                                {
                                    name: "Cake",
                                    signName: "Cakes"
                                },
                                {
                                    name: "Bricks",
                                    signName: "Brick Blocks"
                                },
                                {
                                    name: "Ladder",
                                    signName: "Ladders"
                                },
                                {
                                    name: "Scaffolding"
                                },
                                {
                                    name: "Obsidian"
                                },
                                {
                                    name: "Crying Obsidian"
                                },
                                {
                                    name: "Sniffer Egg",
                                    signName: "Sniffer Eggs"
                                },
                                {
                                    name: "Turtle Egg",
                                    signName: "Turtle Eggs"
                                },
                                {
                                    name: "Creaking Heart",
                                    signName: "Creaking Hearts"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Items",
            utilities: [
                "Crafting Table"
            ],
            subrooms: [
                {
                    name: "Food & Seeds",
                    subrooms: [
                        {
                            name: "Meat",
                            utilities: [
                                "Furnace",
                                "Smoker"
                            ],
                            shortcuts: [
                                {
                                    room: "Brewing Supplies",
                                    items: [
                                        {
                                            name: "Spider Eye"
                                        },
                                        {
                                            name: "Pufferfish"
                                        }
                                    ],
                                    description: "Spider Eyes/Pufferfish"
                                }
                            ],
                            chests: [
                                {
                                    name: "Raw Pork"
                                },
                                {
                                    name: "Porkchop",
                                    signName: "Porkchops"
                                },
                                {
                                    name: "Raw Beef"
                                },
                                {
                                    name: "Steak"
                                },
                                {
                                    name: "Raw Mutton"
                                },
                                {
                                    name: "Cooked Mutton"
                                },
                                {
                                    name: "Raw Chicken"
                                },
                                {
                                    name: "Cooked Chicken"
                                },
                                {
                                    name: "Rotten Flesh"
                                },
                                {
                                    name: "Raw Rabbit"
                                },
                                {
                                    name: "Cooked Rabbit"
                                },
                                {
                                    name: "Rabbit Stew"
                                },
                                {
                                    name: "Tropical Fish"
                                },
                                {
                                    name: "Raw Cod"
                                },
                                {
                                    name: "Cooked Cod"
                                },
                                {
                                    name: "Raw Salmon"
                                },
                                {
                                    name: "Cooked Salmon"
                                }
                            ]
                        },
                        {
                            name: "Seeds",
                            utilities: [
                                "Composter"
                            ],
                            chests: [
                                {
                                    name: "Wheat Seeds"
                                },
                                {
                                    name: "Beetroot Seeds"
                                },
                                {
                                    name: "Melon Seeds"
                                },
                                {
                                    name: "Pumpkin Seeds"
                                },
                                {
                                    name: "Torchflower Seeds"
                                },
                                {
                                    name: "Pitcher Pod",
                                    signName: "Pitcher Pods"
                                }
                            ]
                        },
                        {
                            name: "Vegetarian Options",
                            utilities: [
                                "Composter"
                            ],
                            shortcuts: [
                                {
                                    room: "Terrestrial Fungi",
                                    items: [
                                        {
                                            name: "Brown Mushroom"
                                        },
                                        {
                                            name: "Red Mushroom"
                                        }
                                    ],
                                    description: "Mushrooms"
                                },
                                {
                                    room: "Brewing Supplies",
                                    items: [
                                        {
                                            name: "Glistering Melon"
                                        }
                                    ],
                                    description: "GlisteringMelons"
                                },
                                {
                                    room: "Buckets",
                                    items: [
                                        {
                                            name: "Milk Bucket"
                                        }
                                    ],
                                    description: "Milk Buckets"
                                },
                                {
                                    room: "Fruit",
                                    items: [
                                        {
                                            name: "Melon"
                                        },
                                        {
                                            name: "Pumpkin"
                                        }
                                    ],
                                    description: "Melons/Pumpkins"
                                },
                                {
                                    room: "Miscellaneous Blocks",
                                    items: [
                                        {
                                            name: "Cake"
                                        }
                                    ],
                                    description: "Cakes"
                                }
                            ],
                            chests: [
                                {
                                    name: "Apple",
                                    signName: "Apples"
                                },
                                {
                                    name: "Golden Apple",
                                    signName: "Golden Apples"
                                },
                                {
                                    name: "Enchanted Apple",
                                    signName: "Enchanted Golden Apples"
                                },
                                {
                                    name: "Melon Slice",
                                    signName: "Melon Slices"
                                },
                                {
                                    name: "Carrot",
                                    signName: "Carrots"
                                },
                                {
                                    name: "Golden Carrot",
                                    signName: "Golden Carrots"
                                },
                                {
                                    name: "Potato",
                                    signName: "Potatoes"
                                },
                                {
                                    name: "Baked Potato",
                                    signName: "Baked Potatoes"
                                },
                                {
                                    name: "Poisonous Potato",
                                    signName: "Poisonous Potatoes"
                                },
                                {
                                    name: "Pumpkin Pie",
                                    signName: "Pumpkin Pies"
                                },
                                {
                                    name: "Sweet Berries"
                                },
                                {
                                    name: "Glow Berries"
                                },
                                {
                                    name: "Cookie",
                                    signName: "Cookies"
                                },
                                {
                                    name: "Wheat"
                                },
                                {
                                    name: "Bread"
                                },
                                {
                                    name: "Chorus Fruit"
                                },
                                {
                                    name: "Popped Chorus Fruit"
                                },
                                {
                                    name: "Beetroot",
                                    signName: "Beetroots"
                                },
                                {
                                    name: "Beetroot Soup"
                                },
                                {
                                    name: "Dried Kelp"
                                },
                                {
                                    name: "Mushroom Stew"
                                },
                                {
                                    name: "Sugar"
                                },
                                {
                                    name: "Cocoa Beans"
                                },
                                {
                                    name: "Egg",
                                    signName: "Eggs"
                                },
                                {
                                    name: "Blue Egg",
                                    signName: "Blue Eggs"
                                },
                                {
                                    name: "Brown Egg",
                                    signName: "Brown Eggs"
                                },
                                {
                                    name: "Honey Bottle",
                                    signName: "Honey Bottles"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Brewing",
                    utilities: [
                        "Brewing Stand",
                        "Cauldron",
                        "Water Source"
                    ],
                    shortcuts: [
                        {
                            room: "Buckets",
                            items: [
                                {
                                    name: "Milk Bucket"
                                }
                            ],
                            description: "Milk Buckets"
                        },
                        {
                            room: "Miscellaneous Items",
                            items: [
                                {
                                    name: "Bottle o' Enchanting"
                                },
                                {
                                    name: "Ominous Bottle"
                                }
                            ],
                            description: "Bottles o' Enchanting/Ominous Bottles"
                        }
                    ],
                    subrooms: [
                        {
                            name: "Potions",
                            subrooms: [
                                {
                                    name: "Beneficial Potions",
                                    chests: [
                                        {
                                            name: "Potion of Healing",
                                            modifier: "Instant Health",
                                            signName: "Healing"
                                        },
                                        {
                                            name: "Potion of Healing",
                                            modifier: "Instant Health II",
                                            signName: "Healing II"
                                        },
                                        {
                                            name: "Potion of Fire Resistance",
                                            modifier: "Fire Resistance (3:00)",
                                            signName: "Fire Resistance 3:00"
                                        },
                                        {
                                            name: "Potion of Fire Resistance",
                                            modifier: "Fire Resistance (8:00)",
                                            signName: "Fire Resistance 8:00"
                                        },
                                        {
                                            name: "Potion of Regeneration",
                                            modifier: "Regeneration (0:45)",
                                            signName: "Regeneration 0:45"
                                        },
                                        {
                                            name: "Potion of Regeneration",
                                            modifier: "Regeneration (2:00)",
                                            signName: "Regeneration 2:00"
                                        },
                                        {
                                            name: "Potion of Regeneration",
                                            modifier: "Regeneration II (0:22)",
                                            signName: "Regeneration II"
                                        },
                                        {
                                            name: "Potion of Strength",
                                            modifier: "Strength (3:00)",
                                            signName: "Strength 3:00"
                                        },
                                        {
                                            name: "Potion of Strength",
                                            modifier: "Strength (8:00)",
                                            signName: "Strength 8:00"
                                        },
                                        {
                                            name: "Potion of Strength",
                                            modifier: "Strength II (1:30)",
                                            signName: "Strength II"
                                        },
                                        {
                                            name: "Potion of Night Vision",
                                            modifier: "Night Vision (3:00)",
                                            signName: "Night Vision 3:00"
                                        },
                                        {
                                            name: "Potion of Night Vision",
                                            modifier: "Night Vision (8:00)",
                                            signName: "Night Vision 8:00"
                                        },
                                        {
                                            name: "Potion of Leaping",
                                            modifier: "Jump Boost (3:00)",
                                            signName: "Leaping 3:00"
                                        },
                                        {
                                            name: "Potion of Leaping",
                                            modifier: "Jump Boost (8:00)",
                                            signName: "Leaping 8:00"
                                        },
                                        {
                                            name: "Potion of Leaping",
                                            modifier: "Jump Boost II (1:30)",
                                            signName: "Leaping II"
                                        },
                                        {
                                            name: "Potion of Swiftness",
                                            modifier: "Speed (3:00)",
                                            signName: "Swiftness 3:00"
                                        },
                                        {
                                            name: "Potion of Swiftness",
                                            modifier: "Speed (8:00)",
                                            signName: "Swiftness 8:00"
                                        },
                                        {
                                            name: "Potion of Swiftness",
                                            modifier: "Speed II (1:30)",
                                            signName: "Swiftness II"
                                        },
                                        {
                                            name: "Potion of Water Breathing",
                                            modifier: "Water Breathing (3:00)",
                                            signName: "Water Breathing 3:00"
                                        },
                                        {
                                            name: "Potion of Water Breathing",
                                            modifier: "Water Breathing (8:00)",
                                            signName: "Water Breathing 8:00"
                                        },
                                        {
                                            name: "Potion of Invisibility",
                                            modifier: "Invisibility (3:00)",
                                            signName: "Invisibility 3:00"
                                        },
                                        {
                                            name: "Potion of Invisibility",
                                            modifier: "Invisibility (8:00)",
                                            signName: "Invisibility 8:00"
                                        },
                                        {
                                            name: "Potion of Slow Falling",
                                            modifier: "Slow Falling (1:30)",
                                            signName: "Slow Falling 1:30"
                                        },
                                        {
                                            name: "Potion of Slow Falling",
                                            modifier: "Slow Falling (4:00)",
                                            signName: "Slow Falling 4:00"
                                        }
                                    ]
                                },
                                {
                                    name: "Mixed/Neutral Potions",
                                    chests: [
                                        {
                                            name: "Awkward Potion",
                                            signName: "Awkward"
                                        },
                                        {
                                            name: "Mundane Potion",
                                            signName: "Mundane"
                                        },
                                        {
                                            name: "Thick Potion",
                                            signName: "Thick"
                                        },
                                        {
                                            name: "Potion of the Turtle Master",
                                            modifier: "Slowness IV (0:20)\nResistance III (0:20)",
                                            signName: "Turtle Master 0:20"
                                        },
                                        {
                                            name: "Potion of the Turtle Master",
                                            modifier: "Slowness IV (0:40)\nResistance III (0:40)",
                                            signName: "Turtle Master 0:40"
                                        },
                                        {
                                            name: "Potion of the Turtle Master",
                                            modifier: "Slowness VI (0:20)\\nResistance IV (0:20)",
                                            signName: "Turtle Master II"
                                        },
                                        {
                                            name: "Potion of Infestation",
                                            modifier: "Infested",
                                            signName: "Infestation"
                                        },
                                        {
                                            name: "Potion of Oozing",
                                            modifier: "Oozing",
                                            signName: "Oozing"
                                        },
                                        {
                                            name: "Potion of Weaving",
                                            modifier: "Weaving",
                                            signName: "Weaving"
                                        },
                                        {
                                            name: "Potion of Wind Charging",
                                            modifier: "Wind Charged",
                                            signName: "Wind Charging"
                                        }
                                    ]
                                },
                                {
                                    name: "Detrimental Potions",
                                    chests: [
                                        {
                                            name: "Potion of Poison",
                                            modifier: "Poison (0:45)",
                                            signName: "Poison 0:45"
                                        },
                                        {
                                            name: "Potion of Poison",
                                            modifier: "Poison (2:00)",
                                            signName: "Poison 2:00"
                                        },
                                        {
                                            name: "Potion of Poison",
                                            modifier: "Poison II (0:22)",
                                            signName: "Poison II"
                                        },
                                        {
                                            name: "Potion of Weakness",
                                            modifier: "Weakness (1:30)",
                                            signName: "Weakness 1:30"
                                        },
                                        {
                                            name: "Potion of Weakness",
                                            modifier: "Weakness (4:00)",
                                            signName: "Weakness 4:00"
                                        },
                                        {
                                            name: "Potion of Slowness",
                                            modifier: "Slowness (1:30)",
                                            signName: "Slowness 1:30"
                                        },
                                        {
                                            name: "Potion of Slowness",
                                            modifier: "Slowness (4:00)",
                                            signName: "Slowness 4:00"
                                        },
                                        {
                                            name: "Potion of Slowness",
                                            modifier: "Slowness IV (0:20)",
                                            signName: "Slowness IV"
                                        },
                                        {
                                            name: "Potion of Harming",
                                            modifier: "Instant Damage",
                                            signName: "Harming"
                                        },
                                        {
                                            name: "Potion of Harming",
                                            modifier: "Instant Damage II",
                                            signName: "Harming II"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Splash Potions",
                            subrooms: [
                                {
                                    name: "Beneficial Splash Potions",
                                    chests: [
                                        {
                                            name: "Splash Potion of Healing",
                                            modifier: "Instant Health",
                                            signName: "Healing"
                                        },
                                        {
                                            name: "Splash Potion of Healing",
                                            modifier: "Instant Health II",
                                            signName: "Healing II"
                                        },
                                        {
                                            name: "Splash Potion of Fire Resistance",
                                            modifier: "Fire Resistance (2:15)",
                                            signName: "Fire Resistance 2:15"
                                        },
                                        {
                                            name: "Splash Potion of Fire Resistance",
                                            modifier: "Fire Resistance (6:00)",
                                            signName: "Fire Resistance 6:00"
                                        },
                                        {
                                            name: "Splash Potion of Regeneration",
                                            modifier: "Regeneration (0:33)",
                                            signName: "Regeneration 0:33"
                                        },
                                        {
                                            name: "Splash Potion of Regeneration",
                                            modifier: "Regeneration (1:30)",
                                            signName: "Regeneration 1:30"
                                        },
                                        {
                                            name: "Splash Potion of Regeneration",
                                            modifier: "Regeneration II (0:16)",
                                            signName: "Regeneration II"
                                        },
                                        {
                                            name: "Splash Potion of Strength",
                                            modifier: "Strength (2:15)",
                                            signName: "Strength 2:15"
                                        },
                                        {
                                            name: "Splash Potion of Strength",
                                            modifier: "Strength (6:00)",
                                            signName: "Strength 6:00"
                                        },
                                        {
                                            name: "Splash Potion of Strength",
                                            modifier: "Strength II (1:07)",
                                            signName: "Strength II"
                                        },
                                        {
                                            name: "Splash Potion of Night Vision",
                                            modifier: "Night Vision (2:15)",
                                            signName: "Night Vision 2:15"
                                        },
                                        {
                                            name: "Splash Potion of Night Vision",
                                            modifier: "Night Vision (6:00)",
                                            signName: "Night Vision 6:00"
                                        },
                                        {
                                            name: "Splash Potion of Leaping",
                                            modifier: "Jump Boost (2:15)",
                                            signName: "Leaping 2:15"
                                        },
                                        {
                                            name: "Splash Potion of Leaping",
                                            modifier: "Jump Boost (6:00)",
                                            signName: "Leaping 6:00"
                                        },
                                        {
                                            name: "Splash Potion of Leaping",
                                            modifier: "Jump Boost II (1:07)",
                                            signName: "Leaping II"
                                        },
                                        {
                                            name: "Splash Potion of Swiftness",
                                            modifier: "Speed (2:15)",
                                            signName: "Swiftness 2:15"
                                        },
                                        {
                                            name: "Splash Potion of Swiftness",
                                            modifier: "Speed (6:00)",
                                            signName: "Swiftness 6:00"
                                        },
                                        {
                                            name: "Splash Potion of Swiftness",
                                            modifier: "Speed II (1:07)",
                                            signName: "Swiftness II"
                                        },
                                        {
                                            name: "Splash Potion of Water Breathing",
                                            modifier: "Water Breathing (2:15)",
                                            signName: "Water Breathing 2:15"
                                        },
                                        {
                                            name: "Splash Potion of Water Breathing",
                                            modifier: "Water Breathing (6:00)",
                                            signName: "Water Breathing 6:00"
                                        },
                                        {
                                            name: "Splash Potion of Invisibility",
                                            modifier: "Invisibility (2:15)",
                                            signName: "Invisibility 2:15"
                                        },
                                        {
                                            name: "Splash Potion of Invisibility",
                                            modifier: "Invisibility (6:00)",
                                            signName: "Invisibility 6:00"
                                        },
                                        {
                                            name: "Splash Potion of Slow Falling",
                                            modifier: "Slow Falling (1:07)",
                                            signName: "Slow Falling 1:07"
                                        },
                                        {
                                            name: "Splash Potion of Slow Falling",
                                            modifier: "Slow Falling (3:00)",
                                            signName: "Slow Falling 3:00"
                                        }
                                    ]
                                },
                                {
                                    name: "Mixed/Neutral Splash Potions",
                                    chests: [
                                        {
                                            name: "Splash Water Bottle",
                                            signName: "Water"
                                        },
                                        {
                                            name: "Splash Awkward Potion",
                                            signName: "Awkward"
                                        },
                                        {
                                            name: "Splash Mundane Potion",
                                            signName: "Mundane"
                                        },
                                        {
                                            name: "Splash Thick Potion",
                                            signName: "Thick"
                                        },
                                        {
                                            name: "Splash Potion of the Turtle Master",
                                            modifier: "Slowness IV (0:15)\nResistance III (0:15)",
                                            signName: "Turtle Master 0:15"
                                        },
                                        {
                                            name: "Splash Potion of the Turtle Master",
                                            modifier: "Slowness IV (0:30)\nResistance III (0:30)",
                                            signName: "Turtle Master 0:30"
                                        },
                                        {
                                            name: "Splash Potion of the Turtle Master",
                                            modifier: "Slowness VI (0:15)\nResistance IV (0:15)",
                                            signName: "Turtle Master II"
                                        },
                                        {
                                            name: "Splash Potion of Infestation",
                                            modifier: "Infested",
                                            signName: "Infestation"
                                        },
                                        {
                                            name: "Splash Potion of Oozing",
                                            modifier: "Oozing",
                                            signName: "Oozing"
                                        },
                                        {
                                            name: "Splash Potion of Weaving",
                                            modifier: "Weaving",
                                            signName: "Weaving"
                                        },
                                        {
                                            name: "Splash Potion of Wind Charging",
                                            modifier: "Wind Charged",
                                            signName: "Wind Charging"
                                        }
                                    ]
                                },
                                {
                                    name: "Detrimental Splash Potions",
                                    chests: [
                                        {
                                            name: "Splash Potion of Poison",
                                            modifier: "Poison (0:33)",
                                            signName: "Poison 0:33"
                                        },
                                        {
                                            name: "Splash Potion of Poison",
                                            modifier: "Poison (1:30)",
                                            signName: "Poison 1:30"
                                        },
                                        {
                                            name: "Splash Potion of Poison",
                                            modifier: "Poison II (0:16)",
                                            signName: "Poison II"
                                        },
                                        {
                                            name: "Splash Potion of Weakness",
                                            modifier: "Weakness (1:07)",
                                            signName: "Weakness 1:07"
                                        },
                                        {
                                            name: "Splash Potion of Weakness",
                                            modifier: "Weakness (3:00)",
                                            signName: "Weakness 3:00"
                                        },
                                        {
                                            name: "Splash Potion of Slowness",
                                            modifier: "Slowness (1:07)",
                                            signName: "Slowness 1:07"
                                        },
                                        {
                                            name: "Splash Potion of Slowness",
                                            modifier: "Slowness (3:00)",
                                            signName: "Slowness 3:00"
                                        },
                                        {
                                            name: "Splash Potion of Slowness",
                                            modifier: "Slowness IV (0:15)",
                                            signName: "Slowness IV"
                                        },
                                        {
                                            name: "Splash Potion of Harming",
                                            modifier: "Instant Damage",
                                            signName: "Harming"
                                        },
                                        {
                                            name: "Splash Potion of Harming",
                                            modifier: "Instant Damage II",
                                            signName: "Harming II"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Lingering Potions",
                            subrooms: [
                                {
                                    name: "Beneficial Lingering Potions",
                                    chests: [
                                        {
                                            name: "Lingering Potion of Healing",
                                            modifier: "Instant Health",
                                            signName: "Healing"
                                        },
                                        {
                                            name: "Lingering Potion of Healing",
                                            modifier: "Instant Health II",
                                            signName: "Healing II"
                                        },
                                        {
                                            name: "Lingering Potion of Fire Resistance",
                                            modifier: "Fire Resistance (0:45)",
                                            signName: "Fire Resistance 0:45"
                                        },
                                        {
                                            name: "Lingering Potion of Fire Resistance",
                                            modifier: "Fire Resistance (2:00)",
                                            signName: "Fire Resistance 2:00"
                                        },
                                        {
                                            name: "Lingering Potion of Regeneration",
                                            modifier: "Regeneration (0:11)",
                                            signName: "Regeneration 0:11"
                                        },
                                        {
                                            name: "Lingering Potion of Regeneration",
                                            modifier: "Regeneration (0:30)",
                                            signName: "Regeneration 0:30"
                                        },
                                        {
                                            name: "Lingering Potion of Regeneration",
                                            modifier: "Regeneration II (0:05)",
                                            signName: "Regeneration II"
                                        },
                                        {
                                            name: "Lingering Potion of Strength",
                                            modifier: "Strength (0:45)",
                                            signName: "Strength 0:45"
                                        },
                                        {
                                            name: "Lingering Potion of Strength",
                                            modifier: "Strength (2:00)",
                                            signName: "Strength 2:00"
                                        },
                                        {
                                            name: "Lingering Potion of Strength",
                                            modifier: "Strength II (0:22)",
                                            signName: "Strength II"
                                        },
                                        {
                                            name: "Lingering Potion of Night Vision",
                                            modifier: "Night Vision (0:45)",
                                            signName: "Night Vision 0:45"
                                        },
                                        {
                                            name: "Lingering Potion of Night Vision",
                                            modifier: "Night Vision (2:00)",
                                            signName: "Night Vision 2:00"
                                        },
                                        {
                                            name: "Lingering Potion of Leaping",
                                            modifier: "Jump Boost (0:45)",
                                            signName: "Leaping 0:45"
                                        },
                                        {
                                            name: "Lingering Potion of Leaping",
                                            modifier: "Jump Boost (2:00)",
                                            signName: "Leaping 2:00"
                                        },
                                        {
                                            name: "Lingering Potion of Leaping",
                                            modifier: "Jump Boost II (0:22)",
                                            signName: "Leaping II"
                                        },
                                        {
                                            name: "Lingering Potion of Swiftness",
                                            modifier: "Speed (0:45)",
                                            signName: "Swiftness 0:45"
                                        },
                                        {
                                            name: "Lingering Potion of Swiftness",
                                            modifier: "Speed (2:00)",
                                            signName: "Swiftness 2:00"
                                        },
                                        {
                                            name: "Lingering Potion of Swiftness",
                                            modifier: "Speed II (0:22)",
                                            signName: "Swiftness II"
                                        },
                                        {
                                            name: "Lingering Potion of Water Breathing",
                                            modifier: "Water Breathing (0:45)",
                                            signName: "Water Breathing 0:45"
                                        },
                                        {
                                            name: "Lingering Potion of Water Breathing",
                                            modifier: "Water Breathing (2:00)",
                                            signName: "Water Breathing 2:00"
                                        },
                                        {
                                            name: "Lingering Potion of Invisibility",
                                            modifier: "Invisibility (0:45)",
                                            signName: "Invisibility 0:45"
                                        },
                                        {
                                            name: "Lingering Potion of Invisibility",
                                            modifier: "Invisibility (2:00)",
                                            signName: "Invisibility 2:00"
                                        },
                                        {
                                            name: "Lingering Potion of Slow Falling",
                                            modifier: "Slow Falling (0:22)",
                                            signName: "Slow Falling 0:22"
                                        },
                                        {
                                            name: "Lingering Potion of Slow Falling",
                                            modifier: "Slow Falling (1:00)",
                                            signName: "Slow Falling 1:00"
                                        }
                                    ]
                                },
                                {
                                    name: "Mixed/Neutral Lingering Potions",
                                    chests: [
                                        {
                                            name: "Lingering Water Bottle",
                                            signName: "Water"
                                        },
                                        {
                                            name: "Lingering Awkward Potion",
                                            signName: "Awkward"
                                        },
                                        {
                                            name: "Lingering Mundane Potion",
                                            signName: "Mundane"
                                        },
                                        {
                                            name: "Lingering Thick Potion",
                                            signName: "Thick"
                                        },
                                        {
                                            name: "Lingering Potion of the Turtle Master",
                                            modifier: "Slowness IV (0:05)\nResistance III (0:05)",
                                            signName: "Turtle Master 0:05"
                                        },
                                        {
                                            name: "Lingering Potion of the Turtle Master",
                                            modifier: "Slowness IV (0:10)\nResistance III (0:10)",
                                            signName: "Turtle Master 0:10"
                                        },
                                        {
                                            name: "Lingering Potion of the Turtle Master",
                                            modifier: "Slowness VI (0:05)\nResistance IV (0:05)",
                                            signName: "Turtle Master II"
                                        },
                                        {
                                            name: "Lingering Potion of Infestation",
                                            modifier: "Infested",
                                            signName: "Infestation"
                                        },
                                        {
                                            name: "Lingering Potion of Oozing",
                                            modifier: "Oozing",
                                            signName: "Oozing"
                                        },
                                        {
                                            name: "Lingering Potion of Weaving",
                                            modifier: "Weaving",
                                            signName: "Weaving"
                                        },
                                        {
                                            name: "Lingering Potion of Wind Charging",
                                            modifier: "Wind Charged",
                                            signName: "Wind Charging"
                                        }
                                    ]
                                },
                                {
                                    name: "Detrimental Lingering Potions",
                                    chests: [
                                        {
                                            name: "Lingering Potion of Poison",
                                            modifier: "Poison (0:11)",
                                            signName: "Poison 0:11"
                                        },
                                        {
                                            name: "Lingering Potion of Poison",
                                            modifier: "Poison (0:30)",
                                            signName: "Poison 0:30"
                                        },
                                        {
                                            name: "Lingering Potion of Poison",
                                            modifier: "Poison II (0:05)",
                                            signName: "Poison II"
                                        },
                                        {
                                            name: "Lingering Potion of Weakness",
                                            modifier: "Weakness (0:22)",
                                            signName: "Weakness 0:22"
                                        },
                                        {
                                            name: "Lingering Potion of Weakness",
                                            modifier: "Weakness (1:00)",
                                            signName: "Weakness 1:00"
                                        },
                                        {
                                            name: "Lingering Potion of Slowness",
                                            modifier: "Slowness (0:22)",
                                            signName: "Slowness 0:22"
                                        },
                                        {
                                            name: "Lingering Potion of Slowness",
                                            modifier: "Slowness (1:00)",
                                            signName: "Slowness 1:00"
                                        },
                                        {
                                            name: "Lingering Potion of Slowness",
                                            modifier: "Slowness IV (0:05)",
                                            signName: "Slowness IV"
                                        },
                                        {
                                            name: "Lingering Potion of Harming",
                                            modifier: "Instant Damage",
                                            signName: "Harming"
                                        },
                                        {
                                            name: "Lingering Potion of Harming",
                                            modifier: "Instant Damage II",
                                            signName: "Harming II"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Brewing Supplies",
                            upstreamName: "Supplies",
                            shortcutName: "Brewing Supplies",
                            shortcuts: [
                                {
                                    room: "Vegetarian Options",
                                    items: [
                                        {
                                            name: "Sugar"
                                        },
                                        {
                                            name: "Golden Carrot"
                                        }
                                    ],
                                    description: "Sugar/Golden Carrots"
                                },
                                {
                                    room: "Transmitters",
                                    items: [
                                        {
                                            name: "Redstone Dust"
                                        }
                                    ]
                                },
                                {
                                    room: "Firework Supplies",
                                    items: [
                                        {
                                            name: "Gunpowder"
                                        }
                                    ]
                                }
                            ],
                            chests: [
                                {
                                    name: "Water Bottle",
                                    signName: "Bottles of Water"
                                },
                                {
                                    name: "Pufferfish"
                                },
                                {
                                    name: "Bottle",
                                    signName: "Bottles"
                                },
                                {
                                    name: "Dragon's Breath",
                                    signName: "Dragons' Breaths"
                                },
                                {
                                    name: "Spider Eye",
                                    signName: "Spider Eyes"
                                },
                                {
                                    name: "Fermented Spider Eye",
                                    signName: "Fermented Spider Eyes"
                                },
                                {
                                    name: "Blaze Rod",
                                    signName: "Blaze Rods"
                                },
                                {
                                    name: "Blaze Powder"
                                },
                                {
                                    name: "Turtle Shell",
                                    signName: "Turtle Shells"
                                },
                                {
                                    name: "Phantom Membrane",
                                    signName: "Phantom Membranes"
                                },
                                {
                                    name: "Glistering Melon",
                                    signName: "Glistering Melons"
                                },
                                {
                                    name: "Glowstone Dust"
                                },
                                {
                                    name: "Nether Wart",
                                    signName: "Nether Warts"
                                },
                                {
                                    name: "Magma Cream"
                                },
                                {
                                    name: "Rabbit's Foot",
                                    signName: "Rabbits' Feet"
                                },
                                {
                                    name: "Ghast Tear",
                                    signName: "Ghast Tears"
                                },
                                {
                                    name: "Breeze Rod",
                                    signName: "Breeze Rods"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Equipment",
                    utilities: [
                        "Grindstone",
                        "Smithing Table",
                        "Anvil"
                    ],
                    subrooms: [
                        {
                            name: "Pickaxes",
                            chests: [
                                {
                                    name: "Wooden Pickaxe",
                                    signName: "Wood Pickaxes"
                                },
                                {
                                    name: "Stone Pickaxe",
                                    signName: "Stone Pickaxes"
                                },
                                {
                                    name: "Iron Pickaxe",
                                    signName: "Iron Pickaxes"
                                },
                                {
                                    name: "Gold Pickaxe",
                                    signName: "Gold Pickaxes"
                                },
                                {
                                    name: "Diamond Pickaxe",
                                    signName: "Diamond Pickaxes"
                                },
                                {
                                    name: "Netherite Pickaxe",
                                    signName: "Netherite Pickaxes"
                                }
                            ]
                        },
                        {
                            name: "Shovels",
                            chests: [
                                {
                                    name: "Wooden Shovel",
                                    signName: "Wood Shovels"
                                },
                                {
                                    name: "Stone Shovel",
                                    signName: "Stone Shovels"
                                },
                                {
                                    name: "Iron Shovel",
                                    signName: "Iron Shovels"
                                },
                                {
                                    name: "Gold Shovel",
                                    signName: "Gold Shovels"
                                },
                                {
                                    name: "Diamond Shovel",
                                    signName: "Diamond Shovels"
                                },
                                {
                                    name: "Netherite Shovel",
                                    signName: "Netherite Shovels"
                                }
                            ]
                        },
                        {
                            name: "Axes",
                            chests: [
                                {
                                    name: "Wooden Axe",
                                    signName: "Wood Axes"
                                },
                                {
                                    name: "Stone Axe",
                                    signName: "Stone Axes"
                                },
                                {
                                    name: "Iron Axe",
                                    signName: "Iron Axes"
                                },
                                {
                                    name: "Gold Axe",
                                    signName: "Gold Axes"
                                },
                                {
                                    name: "Diamond Axe",
                                    signName: "Diamond Axes"
                                },
                                {
                                    name: "Netherite Axe",
                                    signName: "Netherite Axes"
                                }
                            ]
                        },
                        {
                            name: "Hoes",
                            chests: [
                                {
                                    name: "Wooden Hoe",
                                    signName: "Wood Hoes"
                                },
                                {
                                    name: "Stone Hoe",
                                    signName: "Stone Hoes"
                                },
                                {
                                    name: "Iron Hoe",
                                    signName: "Iron Hoes"
                                },
                                {
                                    name: "Gold Hoe",
                                    signName: "Gold Hoes"
                                },
                                {
                                    name: "Diamond Hoe",
                                    signName: "Diamond Hoes"
                                },
                                {
                                    name: "Netherite Hoe",
                                    signName: "Netherite Hoes"
                                }
                            ]
                        },
                        {
                            name: "Swords",
                            chests: [
                                {
                                    name: "Wooden Sword",
                                    signName: "Wood Swords"
                                },
                                {
                                    name: "Stone Sword",
                                    signName: "Stone Swords"
                                },
                                {
                                    name: "Iron Sword",
                                    signName: "Iron Swords"
                                },
                                {
                                    name: "Gold Sword",
                                    signName: "Gold Swords"
                                },
                                {
                                    name: "Diamond Sword",
                                    signName: "Diamond Swords"
                                },
                                {
                                    name: "Netherite Sword",
                                    signName: "Netherite Swords"
                                }
                            ]
                        },
                        {
                            name: "Ranged Weapons & Projectiles",
                            shortcutName: "Projectiles",
                            utilities: [
                                "Fletching Table"
                            ],
                            shortcuts: [
                                {
                                    room: "Vegetarian Options",
                                    items: [
                                        {
                                            name: "Egg"
                                        },
                                        {
                                            name: "Blue Egg"
                                        },
                                        {
                                            name: "Brown Egg"
                                        }
                                    ],
                                    description: "Eggs"
                                },
                                {
                                    room: "Firework Rockets",
                                    items: [
                                        {
                                            name: "Firework Rocket"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "White"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Light Gray"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Gray"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Black"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Red"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Orange"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Yellow"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Lime"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Green"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Blue"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Light Blue"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Cyan"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Purple"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Magenta"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Pink"
                                        },
                                        {
                                            name: "Firework Rocket",
                                            modifier: "Brown"
                                        }
                                    ],
                                    description: "Fireworks"
                                }
                            ],
                            chests: [
                                {
                                    name: "Trident",
                                    signName: "Tridents"
                                },
                                {
                                    name: "Bow",
                                    signName: "Bows"
                                },
                                {
                                    name: "Arrow",
                                    signName: "Arrows"
                                },
                                {
                                    name: "Crossbow",
                                    signName: "Crossbows"
                                },
                                {
                                    name: "Ender Pearl",
                                    signName: "Ender Pearls"
                                },
                                {
                                    name: "Snowball",
                                    signName: "Snowballs"
                                },
                                {
                                    name: "Fire Charge",
                                    signName: "Fire Charges"
                                },
                                {
                                    name: "Wind Charge",
                                    signName: "Wind Charges"
                                }
                            ],
                            subrooms: [
                                {
                                    name: "Tipped Arrows",
                                    utilities: [
                                        "Cauldron"
                                    ],
                                    subrooms: [
                                        {
                                            name: "Beneficial Tipped Arrows",
                                            chests: [
                                                {
                                                    name: "Arrow of Healing",
                                                    modifier: "Instant Health",
                                                    signName: "Healing"
                                                },
                                                {
                                                    name: "Arrow of Healing",
                                                    modifier: "Instant Health II",
                                                    signName: "Healing II"
                                                },
                                                {
                                                    name: "Arrow of Fire Resistance",
                                                    modifier: "Fire Resistance (0:22)",
                                                    signName: "Fire Resistance 0:22"
                                                },
                                                {
                                                    name: "Arrow of Fire Resistance",
                                                    modifier: "Fire Resistance (1:00)",
                                                    signName: "Fire Resistance 1:00"
                                                },
                                                {
                                                    name: "Arrow of Regeneration",
                                                    modifier: "Regeneration (0:05)",
                                                    signName: "Regeneration 0:05"
                                                },
                                                {
                                                    name: "Arrow of Regeneration",
                                                    modifier: "Regeneration (0:15)",
                                                    signName: "Regeneration 0:15"
                                                },
                                                {
                                                    name: "Arrow of Regeneration",
                                                    modifier: "Regeneration II (0:02)",
                                                    signName: "Regeneration II"
                                                },
                                                {
                                                    name: "Arrow of Strength",
                                                    modifier: "Strength (0:22)",
                                                    signName: "Strength 0:22"
                                                },
                                                {
                                                    name: "Arrow of Strength",
                                                    modifier: "Strength (1:00)",
                                                    signName: "Strength 1:00"
                                                },
                                                {
                                                    name: "Arrow of Strength",
                                                    modifier: "Strength II (0:11)",
                                                    signName: "Strength II"
                                                },
                                                {
                                                    name: "Arrow of Night Vision",
                                                    modifier: "Night Vision (0:22)",
                                                    signName: "Night Vision 0:22"
                                                },
                                                {
                                                    name: "Arrow of Night Vision",
                                                    modifier: "Night Vision (1:00)",
                                                    signName: "Night Vision 1:00"
                                                },
                                                {
                                                    name: "Arrow of Leaping",
                                                    modifier: "Jump Boost (0:22)",
                                                    signName: "Leaping 0:22"
                                                },
                                                {
                                                    name: "Arrow of Leaping",
                                                    modifier: "Jump Boost (1:00)",
                                                    signName: "Leaping 1:00"
                                                },
                                                {
                                                    name: "Arrow of Leaping",
                                                    modifier: "Jump Boost II (0:11)",
                                                    signName: "Leaping II"
                                                },
                                                {
                                                    name: "Arrow of Swiftness",
                                                    modifier: "Speed (0:22)",
                                                    signName: "Swiftness 0:22"
                                                },
                                                {
                                                    name: "Arrow of Swiftness",
                                                    modifier: "Speed (1:00)",
                                                    signName: "Swiftness 1:00"
                                                },
                                                {
                                                    name: "Arrow of Swiftness",
                                                    modifier: "Speed II",
                                                    signName: "Swiftness II"
                                                },
                                                {
                                                    name: "Arrow of Water Breathing",
                                                    modifier: "Water Breathing (0:22)",
                                                    signName: "Water Breathing 0:22"
                                                },
                                                {
                                                    name: "Arrow of Water Breathing",
                                                    modifier: "Water Breathing (1:00)",
                                                    signName: "Water Breathing 1:00"
                                                },
                                                {
                                                    name: "Arrow of Invisibility",
                                                    modifier: "Invisibility (0:22)",
                                                    signName: "Invisibility 0:22"
                                                },
                                                {
                                                    name: "Arrow of Invisibility",
                                                    modifier: "Invisibility (1:00)",
                                                    signName: "Invisibility 1:00"
                                                },
                                                {
                                                    name: "Arrow of Slow Falling",
                                                    modifier: "Slow Falling (0:11)",
                                                    signName: "Slow Falling 0:11"
                                                },
                                                {
                                                    name: "Arrow of Slow Falling",
                                                    modifier: "Slow Falling (0:30)",
                                                    signName: "Slow Falling 0:30"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Mixed/Neutral Tipped Arrows",
                                            chests: [
                                                {
                                                    name: "Arrow of the Turtle Master",
                                                    modifier: "Slowness IV (0:02)\nResistance III (0:02)",
                                                    signName: "Turtle Master 0:02"
                                                },
                                                {
                                                    name: "Arrow of the Turtle Master",
                                                    modifier: "Slowness IV (0:05)\nResistance III (0:05)",
                                                    signName: "Turtle Master 0:05"
                                                },
                                                {
                                                    name: "Arrow of the Turtle Master",
                                                    modifier: "Slowness VI (0:02)\nResistance IV (0:02)",
                                                    signName: "Turtle Master II"
                                                },
                                                {
                                                    name: "Arrow of Infestation",
                                                    signName: "Infestation"
                                                },
                                                {
                                                    name: "Arrow of Oozing",
                                                    signName: "Oozing"
                                                },
                                                {
                                                    name: "Arrow of Weaving",
                                                    signName: "Weaving"
                                                },
                                                {
                                                    name: "Arrow of Wind Charging",
                                                    signName: "Wind Charging"
                                                }
                                            ]
                                        },
                                        {
                                            name: "Detrimental Tipped Arrows",
                                            chests: [
                                                {
                                                    name: "Arrow of Poison",
                                                    modifier: "Poison (0:05)",
                                                    signName: "Poison 0:05"
                                                },
                                                {
                                                    name: "Arrow of Poison",
                                                    modifier: "Poison (0:15)",
                                                    signName: "Poison 0:15"
                                                },
                                                {
                                                    name: "Arrow of Poison",
                                                    modifier: "Poison II (0:02)",
                                                    signName: "Poison II"
                                                },
                                                {
                                                    name: "Arrow of Weakness",
                                                    modifier: "Weakness (0:11)",
                                                    signName: "Weakness 0:11"
                                                },
                                                {
                                                    name: "Arrow of Weakness",
                                                    modifier: "Weakness (0:30)",
                                                    signName: "Weakness 0:30"
                                                },
                                                {
                                                    name: "Arrow of Slowness",
                                                    modifier: "Slowness (0:11)",
                                                    signName: "Slowness 0:11"
                                                },
                                                {
                                                    name: "Arrow of Slowness",
                                                    modifier: "Slowness (0:30)",
                                                    signName: "Slowness 0:30"
                                                },
                                                {
                                                    name: "Arrow of Slowness",
                                                    modifier: "Slowness IV (0:02)",
                                                    signName: "Slowness IV"
                                                },
                                                {
                                                    name: "Arrow of Harming",
                                                    modifier: "Instant Damage",
                                                    signName: "Harming"
                                                },
                                                {
                                                    name: "Arrow of Harming",
                                                    modifier: "Instant Damage II",
                                                    signName: "Harming II"
                                                },
                                                {
                                                    name: "Arrow of Decay",
                                                    modifier: "Wither II",
                                                    signName: "Decay"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Exploration",
                            utilities: [
                                "Cartography Table"
                            ],
                            chests: [
                                {
                                    name: "Compass",
                                    signName: "Compi"
                                },
                                {
                                    name: "Recovery Compass",
                                    signName: "Recovery Compi"
                                },
                                {
                                    name: "Lodestone Compass",
                                    signName: "Lodestone Compi"
                                },
                                {
                                    name: "Map",
                                    signName: "Maps"
                                },
                                {
                                    name: "Empty Map",
                                    signName: "Empty Maps"
                                },
                                {
                                    name: "Locator Map",
                                    signName: "Locator Maps"
                                },
                                {
                                    name: "Empty Locator Map",
                                    signName: "Empty Locator Maps"
                                },
                                {
                                    name: "Ocean Explorer Map",
                                    signName: "Ocean Explorer Maps"
                                },
                                {
                                    name: "Woodland Explorer Map",
                                    signName: "Woodland Explorer Maps"
                                },
                                {
                                    name: "Treasure Map",
                                    signName: "Buried Treasure Explorer Maps"
                                },
                                {
                                    name: "Trial Explorer Map",
                                    signName: "Trial Explorer Maps"
                                },
                                {
                                    name: "Spyglass",
                                    signName: "Spyglasses"
                                }
                            ]
                        },
                        {
                            name: "Buckets",
                            utilities: [
                                "Water Source"
                            ],
                            chests: [
                                {
                                    name: "Bucket",
                                    signName: "Buckets"
                                },
                                {
                                    name: "Water Bucket",
                                    signName: "Water Buckets"
                                },
                                {
                                    name: "Lava Bucket",
                                    signName: "Lava Buckets"
                                },
                                {
                                    name: "Milk Bucket",
                                    signName: "Milk Buckets"
                                },
                                {
                                    name: " Bucket",
                                    signName: " Buckets"
                                },
                                {
                                    name: "Powder Snow Bucket",
                                    signName: "Powder Snow Buckets"
                                },
                                {
                                    name: "Bucket of Salmon",
                                    signName: "Salmon Buckets"
                                },
                                {
                                    name: "Bucket of Cod",
                                    signName: "Cod Buckets"
                                },
                                {
                                    name: "Bucket of Tropical Fish",
                                    signName: "Tropical Fish Buckets"
                                },
                                {
                                    name: "Bucket of Pufferfish",
                                    signName: "Pufferfish Buckets"
                                },
                                {
                                    name: "Bucket of Axolotl",
                                    signName: "Axolotl Buckets"
                                },
                                {
                                    name: "Bucket of Tadpole",
                                    signName: "Tadpole Buckets"
                                }
                            ]
                        },
                        {
                            name: "Goat Horns",
                            chests: [
                                {
                                    name: "Goat Horn",
                                    modifier: "Ponder",
                                    signName: "Ponder"
                                },
                                {
                                    name: "Goat Horn",
                                    modifier: "Sing",
                                    signName: "Sing"
                                },
                                {
                                    name: "Goat Horn",
                                    modifier: "Seek",
                                    signName: "Seek"
                                },
                                {
                                    name: "Goat Horn",
                                    modifier: "Feel",
                                    signName: "Feel"
                                },
                                {
                                    name: "Goat Horn",
                                    modifier: "Admire",
                                    signName: "Admire"
                                },
                                {
                                    name: "Goat Horn",
                                    modifier: "Call",
                                    signName: "Call"
                                },
                                {
                                    name: "Goat Horn",
                                    modifier: "Yearn",
                                    signName: "Yearn"
                                },
                                {
                                    name: "Goat Horn",
                                    modifier: "Dream",
                                    signName: "Dream"
                                }
                            ]
                        },
                        {
                            name: "Smithing Templates",
                            chests: [
                                {
                                    name: "Smithing Template",
                                    modifier: "Netherite Upgrade",
                                    signName: "Netherite Upgrade"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Coast Armor Trim",
                                    signName: "Coast Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Dune Armor Trim",
                                    signName: "Dune Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Eye Armor Trim",
                                    signName: "Eye Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Host Armor Trim",
                                    signName: "Host Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Raiser Armor Trim",
                                    signName: "Raiser Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Rib Armor Trim",
                                    signName: "Rib Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Sentry Armor Trim",
                                    signName: "Sentry Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Shaper Armor Trim",
                                    signName: "Shaper Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Silence Armor Trim",
                                    signName: "Silence Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Snout Armor Trim",
                                    signName: "Snout Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Spire Armor Trim",
                                    signName: "Spire Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Tide Armor Trim",
                                    signName: "Tide Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Vex Armor Trim",
                                    signName: "Vex Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Ward Armor Trim",
                                    signName: "Ward Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Wayfinder Armor Trim",
                                    signName: "Wayfinder Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Wild Armor Trim",
                                    signName: "Wild Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Bolt Armor Trim",
                                    signName: "Bolt Armor Trim"
                                },
                                {
                                    name: "Smithing Template",
                                    modifier: "Flow Armor Trim",
                                    signName: "Flow Armor Trim"
                                }
                            ]
                        },
                        {
                            name: "Bundles",
                            chests: [
                                {
                                    name: "Bundle",
                                    signName: "Bundles"
                                },
                                {
                                    name: "White Bundle",
                                    signName: "White Bundles"
                                },
                                {
                                    name: "Light Gray Bundle",
                                    signName: "Light Gray Bundles"
                                },
                                {
                                    name: "Gray Bundle",
                                    signName: "Gray Bundles"
                                },
                                {
                                    name: "Black Bundle",
                                    signName: "Black Bundles"
                                },
                                {
                                    name: "Red Bundle",
                                    signName: "Red Bundles"
                                },
                                {
                                    name: "Orange Bundle",
                                    signName: "Orange Bundles"
                                },
                                {
                                    name: "Yellow Bundle",
                                    signName: "Yellow Bundles"
                                },
                                {
                                    name: "Lime Bundle",
                                    signName: "Lime Bundles"
                                },
                                {
                                    name: "Green Bundle",
                                    signName: "Green Bundles"
                                },
                                {
                                    name: "Blue Bundle",
                                    signName: "Blue Bundles"
                                },
                                {
                                    name: "Light Blue Bundle",
                                    signName: "Light Blue Bundles"
                                },
                                {
                                    name: "Cyan Bundle",
                                    signName: "Cyan Bundles"
                                },
                                {
                                    name: "Purple Bundle",
                                    signName: "Purple Bundles"
                                },
                                {
                                    name: "Magenta Bundle",
                                    signName: "Magenta Bundles"
                                },
                                {
                                    name: "Pink Bundle",
                                    signName: "Pink Bundles"
                                },
                                {
                                    name: "Brown Bundle",
                                    signName: "Brown Bundles"
                                }
                            ]
                        },
                        {
                            name: "Miscellaneous Equipment",
                            upstreamName: "Other",
                            chests: [
                                {
                                    name: "Carrot on a Stick",
                                    signName: "Carrots on Sticks"
                                },
                                {
                                    name: "Warped Fungus on a Stick",
                                    signName: "Warped Fungi on Sticks"
                                },
                                {
                                    name: "Shears"
                                },
                                {
                                    name: "Lead",
                                    signName: "Leads"
                                },
                                {
                                    name: "Fishing Rod",
                                    signName: "Fishing Rods"
                                },
                                {
                                    name: "Flint and Steel",
                                    signName: "Flints and Steels"
                                },
                                {
                                    name: "Clock",
                                    signName: "Clocks"
                                },
                                {
                                    name: "Totem of Undying",
                                    signName: "Totems of Undying"
                                },
                                {
                                    name: "Shield",
                                    signName: "Shields"
                                },
                                {
                                    name: "Brush",
                                    signName: "Brushes"
                                },
                                {
                                    name: "Mace",
                                    signName: "Maces"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Wearables",
                    utilities: [
                        "Cauldron",
                        "Grindstone",
                        "Anvil",
                        "Smithing Table"
                    ],
                    subrooms: [
                        {
                            name: "Head",
                            shortcutName: "Headgear",
                            shortcuts: [
                                {
                                    room: "Fruit",
                                    items: [
                                        {
                                            name: "Carved Pumpkin"
                                        }
                                    ],
                                    description: "Carved Pumpkins"
                                },
                                {
                                    room: "Heads",
                                    items: [
                                        {
                                            name: "Zombie Head"
                                        },
                                        {
                                            name: "Creeper Head"
                                        },
                                        {
                                            name: "Ender Dragon Head"
                                        },
                                        {
                                            name: "Skeleton Skull"
                                        },
                                        {
                                            name: "Wither Skeleton Skull"
                                        }
                                    ],
                                    description: "Heads"
                                },
                                {
                                    room: "Brewing Supplies",
                                    items: [
                                        {
                                            name: "Turtle Shell"
                                        }
                                    ],
                                    description: "Turtle Shells"
                                }
                            ],
                            chests: [
                                {
                                    name: "Leather Cap",
                                    signName: "Leather Caps"
                                },
                                {
                                    name: "Iron Helmet",
                                    signName: "Iron Helmets"
                                },
                                {
                                    name: "Gold Helmet",
                                    signName: "Gold Helmets"
                                },
                                {
                                    name: "Chain Helmet",
                                    signName: "Chainmail Helmets"
                                },
                                {
                                    name: "Diamond Helmet",
                                    signName: "Diamond Helmets"
                                },
                                {
                                    name: "Netherite Helmet",
                                    signName: "Netherite Helmets"
                                }
                            ]
                        },
                        {
                            name: "Chest",
                            chests: [
                                {
                                    name: "Leather Tunic",
                                    signName: "Leather Tunics"
                                },
                                {
                                    name: "Iron Chestplate",
                                    signName: "Iron Chestplates"
                                },
                                {
                                    name: "Gold Chestplate",
                                    signName: "Gold Chestplates"
                                },
                                {
                                    name: "Chain Chestplate",
                                    signName: "Chainmail Chestplates"
                                },
                                {
                                    name: "Diamond Chestplate",
                                    signName: "Diamond Chestplates"
                                },
                                {
                                    name: "Netherite Chestplate",
                                    signName: "Netherite Chestplates"
                                },
                                {
                                    name: "Elytra"
                                }
                            ]
                        },
                        {
                            name: "Legs",
                            chests: [
                                {
                                    name: "Leather Pants"
                                },
                                {
                                    name: "Iron Leggings"
                                },
                                {
                                    name: "Gold Leggings"
                                },
                                {
                                    name: "Chain Leggings",
                                    signName: "Chainmail Leggings"
                                },
                                {
                                    name: "Diamond Leggings"
                                },
                                {
                                    name: "Netherite Leggings"
                                }
                            ]
                        },
                        {
                            name: "Feet",
                            chests: [
                                {
                                    name: "Leather Boots"
                                },
                                {
                                    name: "Iron Boots"
                                },
                                {
                                    name: "Gold Boots"
                                },
                                {
                                    name: "Chain Boots",
                                    signName: "Chainmail Boots"
                                },
                                {
                                    name: "Diamond Boots"
                                },
                                {
                                    name: "Netherite Boots"
                                }
                            ]
                        },
                        {
                            name: "Mob",
                            chests: [
                                {
                                    name: "Leather Horse Armor"
                                },
                                {
                                    name: "Iron Horse Armor"
                                },
                                {
                                    name: "Gold Horse Armor"
                                },
                                {
                                    name: "Diamond Horse Armor"
                                },
                                {
                                    name: "Wolf Armor"
                                },
                                {
                                    name: "Saddle",
                                    signName: "Saddles"
                                },
                                {
                                    name: "White Harness",
                                    signName: "White Harnesses"
                                },
                                {
                                    name: "Light Gray Harness",
                                    signName: "Light Gray Harnesses"
                                },
                                {
                                    name: "Gray Harness",
                                    signName: "Gray Harnesses"
                                },
                                {
                                    name: "Black Harness",
                                    signName: "Black Harnesses"
                                },
                                {
                                    name: "Red Harness",
                                    signName: "Red Harnesses"
                                },
                                {
                                    name: "Orange Harness",
                                    signName: "Orange Harnesses"
                                },
                                {
                                    name: "Yellow Harness",
                                    signName: "Yellow Harnesses"
                                },
                                {
                                    name: "Lime Harness",
                                    signName: "Lime Harnesses"
                                },
                                {
                                    name: "Green Harness",
                                    signName: "Green Harnesses"
                                },
                                {
                                    name: "Blue Harness",
                                    signName: "Blue Harnesses"
                                },
                                {
                                    name: "Light Blue Harness",
                                    signName: "Light Blue Harnesses"
                                },
                                {
                                    name: "Cyan Harness",
                                    signName: "Cyan Harnesses"
                                },
                                {
                                    name: "Purple Harness",
                                    signName: "Purple Harnesses"
                                },
                                {
                                    name: "Magenta Harness",
                                    signName: "Magenta Harnesses"
                                },
                                {
                                    name: "Pink Harness",
                                    signName: "Pink Harnesses"
                                },
                                {
                                    name: "Brown Harness",
                                    signName: "Brown Harnesses"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Pyrotechnics",
                    subrooms: [
                        {
                            name: "Firework Rockets",
                            chests: [
                                {
                                    name: "Firework Rocket",
                                    signName: "Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "White",
                                    signName: "White Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Light Gray",
                                    signName: "Light Gray Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Gray",
                                    signName: "Gray Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Black",
                                    signName: "Black Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Red",
                                    signName: "Red Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Orange",
                                    signName: "Orange Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Yellow",
                                    signName: "Yellow Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Lime",
                                    signName: "Lime Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Green",
                                    signName: "Green Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Blue",
                                    signName: "Blue Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Light Blue",
                                    signName: "Light Blue Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Cyan",
                                    signName: "Cyan Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Purple",
                                    signName: "Purple Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Magenta",
                                    signName: "Magenta Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Pink",
                                    signName: "Pink Fireworks"
                                },
                                {
                                    name: "Firework Rocket",
                                    modifier: "Brown",
                                    signName: "Brown Fireworks"
                                }
                            ]
                        },
                        {
                            name: "Firework Supplies",
                            shortcuts: [
                                {
                                    room: "Mineral Items",
                                    items: [
                                        {
                                            name: "Gold Nugget"
                                        }
                                    ],
                                    description: "Gold Nuggets"
                                },
                                {
                                    room: "Dyes",
                                    items: [
                                        {
                                            name: "White Dye",
                                        },
                                        {
                                            name: "Light Gray Dye"
                                        },
                                        {
                                            name: "Gray Dye"
                                        },
                                        {
                                            name: "Black Dye"
                                        },
                                        {
                                            name: "Red Dye"
                                        },
                                        {
                                            name: "Orange Dye"
                                        },
                                        {
                                            name: "Yellow Dye"
                                        },
                                        {
                                            name: "Lime Dye"
                                        },
                                        {
                                            name: "Green Dye"
                                        },
                                        {
                                            name: "Blue Dye"
                                        },
                                        {
                                            name: "Light Blue Dye"
                                        },
                                        {
                                            name: "Cyan Dye"
                                        },
                                        {
                                            name: "Purple Dye"
                                        },
                                        {
                                            name: "Magenta Dye"
                                        },
                                        {
                                            name: "Pink Dye"
                                        },
                                        {
                                            name: "Brown Dye"
                                        }
                                    ],
                                    description: "Dyes"
                                },
                                {
                                    room: "Miscellaneous Items",
                                    items: [
                                        {
                                            name: "Feather"
                                        },
                                        {
                                            name: "Paper"
                                        }
                                    ],
                                    description: "Feathers/Paper"
                                },
                                {
                                    room: "Brewing Supplies",
                                    items: [
                                        {
                                            name: "Glowstone Dust"
                                        }
                                    ]
                                },
                                {
                                    room: "Ranged Weapons & Projectiles",
                                    items: [
                                        {
                                            name: "Fire Charge"
                                        }
                                    ],
                                    description: "Fire Charges"
                                }
                            ],
                            chests: [
                                {
                                    name: "Firework Star",
                                    modifier: "White",
                                    signName: "White Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Light Gray",
                                    signName: "Light Gray Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Gray",
                                    signName: "Gray Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Black",
                                    signName: "Black Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Red",
                                    signName: "Red Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Orange",
                                    signName: "Orange Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Yellow",
                                    signName: "Yellow Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Lime",
                                    signName: "Lime Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Green",
                                    signName: "Green Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Blue",
                                    signName: "Blue Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Light Blue",
                                    signName: "Light Blue Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Cyan",
                                    signName: "Cyan Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Purple",
                                    signName: "Purple Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Magenta",
                                    signName: "Magenta Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Pink",
                                    signName: "Pink Firework Stars"
                                },
                                {
                                    name: "Firework Star",
                                    modifier: "Brown",
                                    signName: "Brown Firework Stars"
                                },
                                {
                                    name: "Gunpowder"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Other Items",
                    upstreamName: "Other",
                    downstreamName: "Other Items",
                    utilities: [
                        "Crafting Table"
                    ],
                    subrooms: [
                        {
                            name: "Mineral Items",
                            upstreamName: "Minerals",
                            shortcutName: "Minerals",
                            utilities: [
                                "Crafting Table"
                            ],
                            shortcuts: [
                                {
                                    room: "Transmitters",
                                    items: [
                                        {
                                            name: "Redstone Dust"
                                        }
                                    ]
                                }
                            ],
                            chests: [
                                {
                                    name: "Coal"
                                },
                                {
                                    name: "Charcoal"
                                },
                                {
                                    name: "Emerald",
                                    signName: "Emeralds"
                                },
                                {
                                    name: "Diamond",
                                    signName: "Diamonds"
                                },
                                {
                                    name: "Iron Nugget",
                                    signName: "Iron Nuggets"
                                },
                                {
                                    name: "Gold Nugget",
                                    signName: "Gold Nuggets"
                                },
                                {
                                    name: "Raw Iron"
                                },
                                {
                                    name: "Raw Gold"
                                },
                                {
                                    name: "Raw Copper"
                                },
                                {
                                    name: "Iron Ingot",
                                    signName: "Iron Ingots"
                                },
                                {
                                    name: "Gold Ingot",
                                    signName: "Gold Ingots"
                                },
                                {
                                    name: "Copper Ingot",
                                    signName: "Copper Ingots"
                                },
                                {
                                    name: "Nether Quartz"
                                },
                                {
                                    name: "Lapis Lazuli"
                                },
                                {
                                    name: "Netherite Scrap",
                                    signName: "Netherite Scraps"
                                },
                                {
                                    name: "Netherite Ingot",
                                    signName: "Netherite Ingots"
                                },
                                {
                                    name: "Amethyst Shard",
                                    signName: "Amethyst Shards"
                                },
                                {
                                    name: "Flint"
                                },
                                {
                                    name: "Resin Brick",
                                    signName: "Resin Bricks"
                                }
                            ]
                        },
                        {
                            name: "Dyes",
                            utilities: [
                                "Water Source",
                                "Cauldron",
                                "Water Source",
                                "Crafting Table"
                            ],
                            shortcuts: [
                                {
                                    room: "Miscellaneous Items",
                                    items: [
                                        {
                                            name: "Bone Meal"
                                        },
                                        {
                                            name: "Ink Sac"
                                        },
                                        {
                                            name: "Glow Ink Sac"
                                        }
                                    ],
                                    description: "Bonemeal/Ink Sacs"
                                },
                                {
                                    room: "Vegetarian Options",
                                    items: [
                                        {
                                            name: "Cocoa Beans"
                                        }
                                    ]
                                },
                                {
                                    room: "Mineral Items",
                                    items: [
                                        {
                                            name: "Lapis Lazuli"
                                        }
                                    ]
                                }
                            ],
                            chests: [
                                {
                                    name: "White Dye"
                                },
                                {
                                    name: "Light Gray Dye"
                                },
                                {
                                    name: "Gray Dye"
                                },
                                {
                                    name: "Black Dye"
                                },
                                {
                                    name: "Red Dye"
                                },
                                {
                                    name: "Orange Dye"
                                },
                                {
                                    name: "Yellow Dye"
                                },
                                {
                                    name: "Lime Dye"
                                },
                                {
                                    name: "Green Dye"
                                },
                                {
                                    name: "Blue Dye"
                                },
                                {
                                    name: "Light Blue Dye"
                                },
                                {
                                    name: "Cyan Dye"
                                },
                                {
                                    name: "Purple Dye"
                                },
                                {
                                    name: "Magenta Dye"
                                },
                                {
                                    name: "Pink Dye"
                                },
                                {
                                    name: "Brown Dye"
                                }
                            ]
                        },
                        {
                            name: "Music Discs",
                            chests: [
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - 13",
                                    signName: "13"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - cat",
                                    signName: "cat"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - blocks",
                                    signName: "blocks"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - chirp",
                                    signName: "chirp"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - far",
                                    signName: "far"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - mall",
                                    signName: "mall"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "Samuel Ţerg - 5",
                                    signName: "5"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "Lena Raine - Pigstep",
                                    signName: "Pigstep"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - mellohi",
                                    signName: "mellohi"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - stal",
                                    signName: "stal"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - strad",
                                    signName: "strad"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - ward",
                                    signName: "ward"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - 11",
                                    signName: "11"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "C418 - wait",
                                    signName: "wait"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "Lena Raine - otherside",
                                    signName: "otherside"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "Aaron Cherof - Relic",
                                    signName: "Relic"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "Aaron Cherof - Precipice",
                                    signName: "Precipice"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "Aaron Cherof - Creator",
                                    signName: "Creator"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "Aaron Cherof - Creator (Music Box)",
                                    signName: "Creator (Music Box)"
                                },
                                {
                                    name: "Music Disc",
                                    modifier: "Amos Roddy - Tears",
                                    signName: "Tears"
                                },
                                {
                                    name: "Disc Fragment",
                                    signName: "Disc Fragments"
                                }
                            ]
                        },
                        {
                            name: "Books",
                            chests: [
                                {
                                    name: "Book",
                                    signName: "Books"
                                },
                                {
                                    name: "Enchanted Book",
                                    signName: "Enchanted Books"
                                },
                                {
                                    name: "Book & Quill",
                                    signName: "Books & Quills"
                                },
                                {
                                    name: "Written Book",
                                    signName: "Written Books"
                                }
                            ]
                        },
                        {
                            name: "Banner Patterns",
                            utilities: [
                                "Loom"
                            ],
                            chests: [
                                {
                                    name: "Banner Pattern",
                                    modifier: "Globe",
                                    signName: "Globe"
                                },
                                {
                                    name: "Banner Pattern",
                                    modifier: "Snout",
                                    signName: "Snout"
                                },
                                {
                                    name: "Banner Pattern",
                                    modifier: "Thing",
                                    signName: "Thing"
                                },
                                {
                                    name: "Banner Pattern",
                                    modifier: "Flower Charge",
                                    signName: "Flower Charge"
                                },
                                {
                                    name: "Banner Pattern",
                                    modifier: "Skull",
                                    signName: "Skull"
                                },
                                {
                                    name: "Banner Pattern",
                                    modifier: "Creeper",
                                    signName: "Creeper"
                                },
                                {
                                    name: "Banner Pattern",
                                    modifier: "Field Masoned",
                                    signName: "Field Masoned"
                                },
                                {
                                    name: "Banner Pattern",
                                    modifier: "Bordure Indented",
                                    signName: "Bordure Indented"
                                },
                                {
                                    name: "Banner Pattern",
                                    modifier: "Flow",
                                    signName: "Flow"
                                },
                                {
                                    name: "Banner Pattern",
                                    modifier: "Guster",
                                    signName: "Guster"
                                }
                            ]
                        },
                        {
                            name: "Pottery Sherds",
                            utilities: [
                                "Crafting Table"
                            ],
                            shortcuts: [
                                {
                                    room: "Miscellaneous Items",
                                    items: [
                                        {
                                            name: "Brick"
                                        }
                                    ],
                                    description: "Bricks"
                                }
                            ],
                            chests: [
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Angler",
                                    signName: "Angler"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Archer",
                                    signName: "Archer"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Arms up",
                                    signName: "Arms Up"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Blade",
                                    signName: "Blade"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Brewer",
                                    signName: "Brewer"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Burn",
                                    signName: "Burn"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Danger",
                                    signName: "Danger"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Explorer",
                                    signName: "Explorer"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Friend",
                                    signName: "Friend"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Heart",
                                    signName: "Heart"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Heartbreak",
                                    signName: "Heartbreak"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Howl",
                                    signName: "Howl"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Miner",
                                    signName: "Miner"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Mourner",
                                    signName: "Mourner"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Plenty",
                                    signName: "Plenty"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Prize",
                                    signName: "Prize"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Sheaf",
                                    signName: "Sheaf"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Shelter",
                                    signName: "Shelter"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Skull",
                                    signName: "Skull"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Snort",
                                    signName: "Snort"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Flow",
                                    signName: "Flow"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Guster",
                                    signName: "Guster"
                                },
                                {
                                    name: "Pottery Sherd",
                                    modifier: "Scrape",
                                    signName: "Scrape"
                                }
                            ]
                        },
                        {
                            name: "Miscellaneous Items",
                            upstreamName: "Miscellaneous",
                            shortcutName: "Misc. Items",
                            chests: [
                                {
                                    name: "Ink Sac",
                                    signName: "Ink Sacs"
                                },
                                {
                                    name: "Glow Ink Sac",
                                    signName: "Glow Ink Sacs"
                                },
                                {
                                    name: "Feather",
                                    signName: "Feathers"
                                },
                                {
                                    name: "Paper"
                                },
                                {
                                    name: "Brick",
                                    signName: "Bricks"
                                },
                                {
                                    name: "Nether Brick",
                                    signName: "Nether Bricks"
                                },
                                {
                                    name: "Clay Ball",
                                    signName: "Clay"
                                },
                                {
                                    name: "Slimeball",
                                    signName: "Slimeballs"
                                },
                                {
                                    name: "Leather"
                                },
                                {
                                    name: "Rabbit Hide",
                                    signName: "Rabbit Hides"
                                },
                                {
                                    name: "Stick",
                                    signName: "Sticks"
                                },
                                {
                                    name: "Bowl",
                                    signName: "Bowls"
                                },
                                {
                                    name: "Honeycomb",
                                    signName: "Honeycombs"
                                },
                                {
                                    name: "Bottle o' Enchanting",
                                    signName: "Bottles o' Enchanting"
                                },
                                {
                                    name: "String"
                                },
                                {
                                    name: "Bone",
                                    signName: "Bones"
                                },
                                {
                                    name: "Nether Star",
                                    signName: "Nether Stars"
                                },
                                {
                                    name: "Eye of Ender",
                                    signName: "Eyes of Ender"
                                },
                                {
                                    name: "Prismarine Shard",
                                    signName: "Prismarine Shards"
                                },
                                {
                                    name: "Prismarine Crystal",
                                    signName: "Prismarine Crystals"
                                },
                                {
                                    name: "Turtle Scute",
                                    signName: "Turtle Scutes"
                                },
                                {
                                    name: "Name Tag",
                                    signName: "Name Tags"
                                },
                                {
                                    name: "Heart of the Sea",
                                    signName: "Hearts of the Sea"
                                },
                                {
                                    name: "Shulker Shell",
                                    signName: "Shulker Shells"
                                },
                                {
                                    name: "Nautilus Shell",
                                    signName: "Nautilus Shells"
                                },
                                {
                                    name: "Echo Shard",
                                    signName: "Echo Shards"
                                },
                                {
                                    name: "Bone Meal",
                                    signName: "Bonemeal"
                                },
                                {
                                    name: "Armadillo Scute",
                                    signName: "Armadillo Scutes"
                                },
                                {
                                    name: "Ominous Bottle",
                                    signName: "Ominous Bottles"
                                },
                                {
                                    name: "Trial Key",
                                    signName: "Trial Keys"
                                },
                                {
                                    name: "Ominous Trial Key",
                                    signName: "Ominous Trial Keys"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}



function renderRoom(room: Room, depth: number): void {
    console.log(`${'  '.repeat(depth)}${room.name}: ${room.chests?.length}`);
    for (const subroom of room?.subrooms ?? []) {
        renderRoom(subroom, depth + 1);
    }
}

renderRoom(bank, 0);
