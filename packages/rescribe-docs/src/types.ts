import type { LoaderFunctionArgs } from '@remix-run/node'

import type { Collections, Config } from '@rescribejs/core'
import type { CollectionInterface } from '@rescribejs/server'
import type { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'

export type DocsLoaderHandlerArgs = LoaderFunctionArgs & {
	docs: CollectionInterface
	docsConfig: RescribeDocsConfig
	rescribeConfig: Config<Collections>
}

interface SocialLink {
	ariaLabel?: string
	icon: ReactNode
	href: string
}

export interface NavLink extends SidebarLink {}

export interface NavbarConfig {
	logo: string | ReactNode
	links?: NavLink[]
	search?: boolean
	socials?: SocialLink[]
}

export interface PaginationLink {
	link: string
	title: string
}

export interface SidebarLink {
	external?: true
	href: string
	icon?: ReactNode
	label: string | ReactNode
}

interface NavigationLinkObject {
	external?: boolean
	title: string
	url: string
}

export type NavigationLink = string | NavigationLinkObject

export interface NavigationLinkGroup {
	title: string
	pages: Record<string, NavigationLink>
}

interface SidebarConfig {
	links?: SidebarLink[]
	navigation: Record<string, NavigationLinkGroup[]>
	search?: boolean
}

export interface FooterConfig {
	text?: string | ReactNode
	socials?: SocialLink[]
}

export interface RescribeDocsConfig {
	footer?: FooterConfig
	navbar: NavbarConfig
	sidebar: SidebarConfig
	theme?: {
		darkModeToggle?: ReactNode
	}
}

export interface RescribeProviderProps {
	children: ReactNode
	config: RescribeDocsConfig | undefined
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

export interface AccordionProps {
	children: string | ReactNode
	defaultOpen: boolean
	title: string | ReactNode
	index?: number
	length?: number
}

export interface AccordionGroupProps {
	children: ReactElement
}

export interface CalloutProps {
	children: ReactNode
	type: 'info' | 'warning' | 'danger' | 'success' | 'tip'
}

export interface CardProps {
	title: string | ReactNode
	description: string | ReactNode
	icon?: ReactNode
	image?: string
	href: string
}

export interface CardGroupProps {
	children: ReactNode
	cols: 1 | 2 | 3
}

interface ListItem {
	title: string
	description: string
	type?: string
	required?: boolean
	default?: string
}

export interface ListProps {
	items: ListItem[]
}

export interface TabProps {
	active?: boolean
	title: string | ReactNode
	children: string | ReactNode
	currentTab: number
	activeTab: number
	setActiveTab: Dispatch<SetStateAction<number>>
}

export interface TabGroupProps {
	children: ReactElement
}
