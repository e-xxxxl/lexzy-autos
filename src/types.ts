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
  src: string;
  alt: string;
  fallbackTitle: string;
  fallbackIcon: 'SportsCar' | 'Interior' | 'Steering' | 'Grille' | 'Roadster' | 'Sedan';
}

export interface ContactDetail {
  id: string;
  type: 'address' | 'phone' | 'email';
  value: string;
  iconName: 'MapPin' | 'Phone' | 'Mail';
}


