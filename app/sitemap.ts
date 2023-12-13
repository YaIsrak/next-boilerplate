import { NavItem } from '@/lib/constantData';
import { MetadataRoute } from 'next';

const baseUrl = process.env.baseURL
	? `https://${process.env.baseURL}`
	: 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
	const routemap = NavItem.map((item) => ({
		url: `${baseUrl}${item.path}`,
		lastModified: new Date().toISOString(),
	}));

	return [...routemap];
}
