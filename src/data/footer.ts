import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    email: 'address@yoursite.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        instagram: 'https://www.instagram.com/rajaemasindonesia/',
        tiktok: 'https://www.tiktok.com/@rajaemasindonesia_',
    }
}