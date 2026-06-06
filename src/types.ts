export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Car' | 'Star' | 'MessageCircle' | 'CheckCircle';
}

export interface GalleryItem {
  id: string;
  unsplashId: string;
  alt: string;
}

export interface ContactDetail {
  id: string;
  type: 'address' | 'phone' | 'email';
  value: string;
  iconName: 'MapPin' | 'Phone' | 'Mail';
}
