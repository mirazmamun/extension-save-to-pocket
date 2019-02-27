import React from 'react'
import Toggle from 'Elements/Toggle/toggle'
import { localize } from 'Common/_locales/locales'
import { SectionBlock } from './options'

export function SitesBlock({ toggleSite }) {
  const toggleTwitter = () => toggleSite('sites_twitter')

  return (
    <SectionBlock>
      <div className="sectionTitle">
        {localize('options_page', 'quick_save_services_title')}
      </div>
      <div className="sectionBody">
        <Toggle active={false} action={toggleTwitter} />
        Twitter
        <div className="sectionCopy">
          {localize('options_page', 'services_info')}
        </div>
      </div>
    </SectionBlock>
  )
}
