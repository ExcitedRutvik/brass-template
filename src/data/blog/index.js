// Blog post registry. Each post is a structured object consumed by
// Blog.jsx (index) and BlogPost.jsx (template + JSON-LD schema).
import { post as p1 } from './sheet-metal-stamping-components-guide';
import { post as p2 } from './mcb-parts-manufacturing-india';
import { post as p3 } from './brass-electrical-components-guide';
import { post as p4 } from './modular-socket-switch-parts-guide';
import { post as p5 } from './crimping-lugs-explained';
import { post as p6 } from './brass-turned-components-cnc';
import { post as p7 } from './brass-moulding-inserts-guide';
import { post as p8 } from './deep-draw-sheet-metal-products';
import { post as p9 } from './choosing-manufacturer-jamnagar';
import { post as p10 } from './brass-components-automobile-industry';
import { post as p11 } from './brass-terminals-earthing-accessories';
import { post as p12 } from './brass-vs-ms-washers';

export const posts = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
export const getRelatedPosts = (slugs = []) => posts.filter((p) => slugs.includes(p.slug));
export const categories = [...new Set(posts.map((p) => p.category))];
