import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	// define: {
	// 	"global": {},
	// },
	plugins: [sveltekit()]
};

export default config;
