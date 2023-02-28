import type { ReactNode } from 'react'

interface NavbarConfig {
	logo: string | ReactNode
	search?: boolean
}

export interface SidebarLink {
	external?: true
	href: string
	icon?: ReactNode
	label: string | ReactNode
}

interface SidebarConfig {
	links?: SidebarLink[]
	navigation: Record<string, unknown>
	search?: boolean
}

export interface RescribeConfig {
	navbar: NavbarConfig
	sidebar?: SidebarConfig
	theme?: {
		darkModeToggle?: ReactNode
	}
}

export interface RescribeProviderProps {
	children: ReactNode
	config: RescribeConfig
}

export interface RescribeDataProviderProps {
	children: ReactNode
	data: any
}

export interface MdxFile {
	base: string
	data?: unknown
	path: string
	route: string
}

export interface Folder {
	base: string
	children?: Array<MdxFile>
	path: string
	route: string
}
