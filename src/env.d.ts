/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

declare module "@pagefind/default-ui" {
	declare class PagefindUI {
		constructor(arg: unknown);
	}
}

interface ImportMetaEnv {
	readonly AUTHOR: string;
	readonly LOCALE: string;
	readonly OG_LOCALE: string;
	readonly TITLE: string;
	readonly DESCRIPTION: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
