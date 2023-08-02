import { IBreed, ICategory, ILabel, ILocation } from "./cows.interface"

export const cowLocationEnum: ILocation[] = ["Dhaka", "Chattogram", "Barishal", "Rajshahi", "Sylhet", "Comilla", "Rangpur", "Mymensingh"]
export const cowBreedEnum: IBreed[] = [
    "Brahman",
    "Nellore",
    "Sahiwal",
    "Gir",
    "Indigenous",
    "Tharparkar",
    "Kankrej"
]
export const cowCategoryEnum: ICategory[] = ["Dairy", "Beef", "DualPurpose"]
export const cowLabelEnum: ILabel[] = ["for sell", "sold out"]