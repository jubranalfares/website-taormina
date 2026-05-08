export type MenuItem = {
    name: string;
    description: string;
    price: string;
    image?: string;
};

export type MenuCategory = {
    name: string;
    items: MenuItem[];
};

export type GalleryImage = {
    src: string;
    alt: string;
};

export type OpeningHour = {
    day: string;
    hours: string;
};

export type RestaurantData = {
    name: string;
    tagline: string;

    contact: {
        phone: string;
        address: string;
        mapsLink: string;
        mapsEmbedUrl: string;
    };

    openingHours: OpeningHour[];
    gallery: GalleryImage[];

    menu: {
        categories: MenuCategory[];
    };
};