import React, { Component } from 'react';
import {getTranslation} from '../../translations';

import SponsorRow from './components/sponsorRow';
import SponsorDetail from './components/sponsorDetail';
import SponsorImages from './components/SponsorImages';
import style from './sponsors.css';

class Sponsors extends Component {

    /* add sponsor images and links */
    /* 
    id = 0 re:start
    id = 1 re:load
    if = 2 re:boot
    */
    constructor(props) {
        super(props);
        this.state = {
            sponsors: [
                {
                    id: 0,
                    name: 'Re:boot',
                    sponsor: [
                        {
                            id: 0,
                            name: 'Origo',
                            photoURL: './images/sponsors/reboot/OrigoLogo.png',
                            website: 'https://www.origo.is/'
                        },
                        {
                            id: 1,
                            name: 'Kvika',
                            photoURL: './images/sponsors/reboot/Merki_Liggjandi_Gull_x1.jpg',
                            website: 'https://www.kvika.is/'
                        },
                        {
                            id: 2,
                            name: 'Auður',
                            photoURL: './images/sponsors/reboot/audur_merki_transparent_Svart.png',
                            website: 'https://www.audur.is/'
                        },
                        {
                            id: 3,
                            name: 'KPMG',
                            photoURL: './images/sponsors/reboot/KPMG_NoCP_RGB.png',
                            website: 'https://www.audur.is/'
                        },
                    ]
                },
                {
                    id: 1,
                    name: 'Re:start',
                    sponsor: [
                        {
                            id: 0,
                            name: 'Byggðastofnun',
                            photoURL: './images/sponsors/restart/Byggst_1800x600px_transp.png',
                            website: 'https://www.byggdastofnun.is/'
                        },
                        {
                            id: 1,
                            name: 'Ölgerðin Egill Skallagrímsson',
                            photoURL: './images/sponsors/restart/OES_logo_png.png',
                            website: 'https://www.olgerdin.is/'
                        },
                        {
                            id: 2,
                            name: 'Vörður',
                            photoURL: './images/sponsors/restart/Vordur_logo_outline.png',
                            website: 'https://vordur.is/'
                        },
                        {
                            id: 3,
                            name: 'Awarego',
                            photoURL: './images/sponsors/restart/awarego.png',
                            website: 'https://www.awarego.com/'
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Re:load',
                    sponsor: [
                        {
                            id: 0,
                            name: 'Deloitte',
                            photoURL: './images/sponsors/reload/DEL_PRI_RGB.png',
                            website: 'https://www2.deloitte.com/is/is.html'
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'Other/Aðrir',
                    sponsor : [
                        {
                            id: 0,
                            name: 'Dominos',
                            photoURL: './images/sponsors/other/Logobakgrunnslaust.png',
                            website: 'https://www.dominos.is/'
                        },
                        {
                            id: 0,
                            name: 'Hostelling International',
                            photoURL: './images/sponsors/other/HI_LOGO_PRIMARY_CMYK.png',
                            website: 'https://www.hostel.is/'
                        },
                        {
                            id: 0,
                            name: 'ENNEMM',
                            photoURL: './images/sponsors/other/ennemm.png',
                            website: 'https://www.ennemm.is/'
                        },
                    ]
                }

            ]
        }
    }

    render() {
        this.text = getTranslation();
        //const { sponsors } = this.props;
        //const { table } = sponsors;
        /*
        1. Reboot
        2. Restart
        3. Reload
        4. other
        */


        var sponsorSection = this.state.sponsors.map(
            (sponsor) => {
                    console.log(this.state.sponsors);
                return (
                    <div>
                    <h2 className="text-center">{sponsor.name}</h2>
                    <SponsorImages
                        key = {sponsor.name}
                        sponsorItem = {sponsor.sponsor}
                    />
                    </div>
                );
            });

        return (
            <div className={style.App}>

                <div className={style.sponsor__content}>
                <h1 className={style.sponsor__main__header}>{this.text.sponsors.sponsors}</h1>
                {/* Her koma myndir af styrkaradilum */}
                <div>
                    {sponsorSection}
                </div>

                {/*
                <SponsorDetail 
                    header={this.text.sponsors.details.reload.header}
                    main={this.text.sponsors.details.reload.main}
                />

                <SponsorDetail 
                    header={this.text.sponsors.details.restart.header}
                    main={this.text.sponsors.details.restart.main}
                />

                <SponsorDetail 
                    header={this.text.sponsors.details.reboot.header}
                    main={this.text.sponsors.details.reboot.main}
                />
                */}
            
            </div>

            </div>
        )
    }
}

export default Sponsors;