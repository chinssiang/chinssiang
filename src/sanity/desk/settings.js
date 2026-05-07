import {
	CogIcon,
	InfoFilledIcon,
	PackageIcon,
	EnterRightIcon,
	DocumentVideoIcon,
} from '@sanity/icons';

export const settingsMenu = (S) => {
	return S.listItem()
		.title('Settings')
		.child(
			S.list()
				.title('Settings')
				.items([
					S.listItem()
						.title('SEO + Social Sharing')
						.child(
							S.editor()
								.id('settingsSharing')
								.schemaType('settingsSharing')
								.documentId('settingsSharing')
						)
						.icon(InfoFilledIcon),
					S.listItem()
						.title('Integrations')
						.child(
							S.editor()
								.id('settingsIntegration')
								.schemaType('settingsIntegration')
								.documentId('settingsIntegration')
						)
						.icon(PackageIcon),
					S.listItem()
						.title('Redirects')
						.child(
							S.editor()
								.id('settingsRedirect')
								.schemaType('settingsRedirect')
								.documentId('settingsRedirect')
						)
						.icon(EnterRightIcon),
				])
		)
		.icon(CogIcon);
};
