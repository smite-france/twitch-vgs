const fsp = require('node:fs/promises')
const path = require("node:path");

const customVoicePack =  [
    {
        "god": "Smite France - DK",
        "folder": "VGS_SMFR",
        "image": null,
        "skin": [
            {
                "name": "default",
                "image": null,
                "folder": "VGS_DK"
            }
        ],
        "commands": {
            "VA1": [
                "va1_classique.mp3",
                "va1_idiot.mp3",
                "va1_perdu.mp3",
                "va1_pirate.mp3"
            ],
            "VA2": [
                "va2_classique.mp3",
                "va2_court.mp3",
                "va2_darkload.mp3",
                "va2_plan.mp3"
            ],
            "VA3": [
                "va3_classique.mp3",
                "va3_grave.mp3",
                "va3_leader.mp3",
                "va3_militaire.mp3"
            ],
            "VAA": [
                "vaa_classique.mp3",
                "vaa_enforce.mp3",
                "vaa_allez.mp3",
                "vaa_bourrin.mp3"
            ],
            "VAF": [
                "vaf_classique.mp3",
                "vaf_fire.mp3",
                "vaf_general.mp3",
                "vaf_gob.mp3"
            ],
            "VAG": [
                "vag_classique.mp3",
                "vag_calmeoupas.mp3",
                "vag_dicton.mp3",
                "vag_vieux.mp3"
            ],
            "VAM": [
                "vam_bourrin.mp3",
                "vam_classique.mp3",
                "vam_fluet.mp3",
                "vam_prevu.mp3"
            ],
            "VAN": [
                "van_classique.mp3",
                "van_dehaut.mp3",
                "van_prof.mp3",
                "van_seigneur.mp3"
            ],
            "VAT1": [
                "vat1_classique.mp3",
                "vat1_magie.mp3",
                "vat1_question.mp3",
                "vat1_tomber.mp3"
            ],
            "VAT2": [
                "vat2_astuce.mp3",
                "vat2_classique.mp3",
                "vat2_garde.mp3",
                "vat2_poulet.mp3"
            ],
            "VAT3": [
                "vat3_bourrin.mp3",
                "vat3_classique.mp3",
                "vat3_danslordre.mp3",
                "vat3_ordreparental.mp3"
            ],
            "VB1": [
                "vb1_classique.mp3",
                "vb1_minus.mp3",
                "vb1_simplet.mp3",
                "vb1_rauque.mp3"
            ],
            "VB2": [
                "vb2_ogre.mp3",
                "vb2_enfantin.mp3",
                "vb2_simple.mp3",
                "vb2_classique.mp3"
            ],
            "VB3": [
                "vb3_adroit.mp3",
                "vb3_rauque.mp3",
                "vb3_appeure.mp3",
                "vb3_classique.mp3"
            ],
            "VBA": [
                "vba_soldat.mp3",
                "vb3_bourgeois.mp3",
                "vb3_ah.mp3",
                "vb3_classique.mp3"
            ],
            "VBB": [
                "vbb_back.mp3",
                "vbb_annonce.mp3",
                "vbb_lalalereuh.mp3",
                "vbb_classique.mp3"
            ],
            "VBD": [
                "vbd_chanson.mp3",
                "vbd_bobo.mp3",
                "vbd_dommage.mp3",
                "vbd_classique.mp3"
            ],
            "VBE": [
                "vbe_mouhaha.mp3",
                "vbe_begaiement.mp3",
                "vbe_attentionhein.mp3",
                "vbe_classique.mp3"
            ],
            "VBF": [
                "vbf_vite.mp3",
                "vbf_pascontent.mp3",
                "vbf_interrogation.mp3",
                "vbf_classique.mp3"
            ],
            "VBG": [
                "vbg_vite.mp3",
                "vbg_depite.mp3",
                "vbg_supposition.mp3",
                "vbg_classique.mp3"
            ],
            "VBJ1": [
                "vbj1_rumeur.mp3",
                "vbj1_apeupres.mp3",
                "vbj1_comptine.mp3",
                "vbj1_classique.mp3"
            ],
            "VBJ3": [
                "vbj3_paysan.mp3",
                "vbj3_documentaire.mp3",
                "vbj3_gauchedroite.mp3",
                "vbj3_classique.mp3"
            ],
            "VBJJ": [
                "vbjj_dommage.mp3",
                "vbjj_qquepart.mp3",
                "vbjj_powwow.mp3",
                "vbjj_classique.mp3"
            ],
            "VBM": [
                "vbm_panique.mp3",
                "vbm_sbire.mp3",
                "vbm_auboulot.mp3",
                "vbm_classique.mp3"
            ],
            "VBS": [
                "vbs_vu.mp3",
                "vbs_enfant.mp3",
                "vbs_fourré.mp3",
                "vbs_classique.mp3"
            ],
            "VC1": [
                "vc1_rauque.mp3",
                "vc1_annonce.mp3",
                "vc1_panique.mp3",
                "vc1_classique.mp3"
            ],
            "VC2": [
                "vc2_suggestion.mp3",
                "vc2_noninspirepourlenom.mp3",
                "vc2_proverbe.mp3",
                "vc2_classique.mp3"
            ],
            "VC3": [
                "vc3_cantateur.mp3",
                "vc3_tention.mp3",
                "vc3_prof.mp3",
                "vc3_classique.mp3"
            ],
            "VCB": [
                "vcb_ordre.mp3",
                "vcb_commetuveux.mp3",
                "vcb_baaack.mp3",
                "vcb_classique.mp3"
            ],
            "VCC": [
                "vcc_prudence.mp3",
                "vcc_grenouille.mp3",
                "vcc_surpris.mp3",
                "vcc_classique.mp3"
            ],
            "VCJ": [
                "vcj_peur.mp3",
                "vcj_murmure.mp3",
                "vcj_militaire.mp3",
                "vcj_classique.mp3"
            ],
            "VD1": [
                "vd1_coach.mp3",
                "vd1_recommandation.mp3",
                "vd1_ordre.mp3",
                "vd1_classique.mp3"
            ],
            "VD2": [
                "vd2_supplication.mp3",
                "vd2_irrite.mp3",
                "vd2_gollum.mp3",
                "vd2_classique.mp3"
            ],
            "VD3": [
                "vd3_riencompris.mp3",
                "vd3_calculs.mp3",
                "vd3_ordrereçu.mp3",
                "vd3_classique.mp3"
            ],
            "VDD": [
                "vdd_elephant.mp3",
                "vdd_irrite.mp3",
                "vdd_ordre.mp3",
                "vdd_classique.mp3"
            ],
            "VDF": [
                "vdf_vraiment.mp3",
                "vdf_machiavelique.mp3",
                "vdf_traitre.mp3",
                "vdf_classique.mp3"
            ],
            "VDG": [
                "vdg_choix.mp3",
                "vdg_ordre.mp3",
                "vdg_amical.mp3",
                "vdg_classique.mp3"
            ],
            "VDM": [
                "vdm_last.mp3",
                "vdm_mitan.mp3",
                "vdm_vdm.mp3",
                "vdm_classique.mp3"
            ],
            "VEA": [
                "vea_fluet.mp3",
                "vea_shangstung.mp3",
                "vea_sobre.mp3",
                "vea_classique.mp3"
            ],
            "VEG": [
                "veg_timbre.mp3",
                "veg_grave.mp3",
                "veg_rauque.mp3",
                "veg_classique.mp3"
            ],
            "VEJ": [
                "vej_portemanteaux.mp3",
                "vej_loki.mp3",
                "vej_chasseur.mp3",
                "vej_elephant.mp3",
                "vej_religieux.mp3",
                "vej_religieuxnul.mp3",
                "vej_doug.mp3",
                "vej_plouf.mp3",
                "vej_nenuphar.mp3",
                "vej_devinette.mp3",
                "vej_just.mp3",
                "vej_cruchot.mp3",
                "vej_vanellope.mp3",
                "vej_marty.mp3",
                "vej_ramada.mp3",
                "vej_darty.mp3"
            ],
            "VEL": [
                "vel_interieurement.mp3",
                "vel_chevre.mp3",
                "vel_gros.mp3",
                "vel_pascompris.mp3",
                "vel_mdroupas.mp3",
                "vel_fou.mp3",
                "vel_contenu.mp3",
                "vel_ahahah.mp3"
            ],
            "VER": [
                "ver_hautain.mp3",
                "ver_snob.mp3",
                "ver_surpris.mp3",
                "ver_classique.mp3"
            ],
            "VET": [
                "vet_aucunechance.mp3",
                "vet_tamère.mp3",
                "vet_tourpartour.mp3",
                "vet_ainz.mp3",
                "vet_itachi.mp3",
                "vet_jin.mp3",
                "vet_aomine.mp3",
                "vet_macleod.mp3",
                "vet_replay.mp3",
                "vet_deku.mp3",
                "vet_detecteur.mp3",
                "vet_boss.mp3",
                "vet_sts.mp3",
                "vet_unechance.mp3",
                "vet_trentesecondes.mp3",
                "vet_johnnycage.mp3"
            ],
            "VEW": [
                "vew_droopy.mp3",
                "vew_dk.mp3",
                "vew_cowboy.mp3",
                "vew_classique.mp3"
            ],
            "VF1": [
                "vf1_prevenu.mp3",
                "vf1_ah.mp3",
                "vf1_cretin.mp3",
                "vf1_classique.mp3"
            ],
            "VF2": [
                "vf2_pizza.mp3",
                "vf2_attention.mp3",
                "vf2_magie.mp3",
                "vf2_classique.mp3"
            ],
            "VF3": [
                "vf3_prophete.mp3",
                "vf3_vision.mp3",
                "vf3_devinette.mp3",
                "vf3_classique.mp3"
            ],
            "VFF": [
                "vff_personne.mp3",
                "vff_invisibles.mp3",
                "vff_neurone.mp3",
                "vff_classique.mp3"
            ],
            "VG1": [
                "vg1_agressif.mp3",
                "vg1_merci.mp3",
                "vg1_please.mp3",
                "vg1_classique.mp3"
            ],
            "VG2": [
                "vg2_please.mp3",
                "vg2_simple.mp3",
                "vg2_allo.mp3",
                "vg2_classique.mp3"
            ],
            "VG3": [
                "vg3_enerve.mp3",
                "vg3_pret.mp3",
                "vg3_please.mp3",
                "vg3_classique.mp3"
            ],
            "VGG": [
                "vgg_commande.mp3",
                "vgg_encore.mp3",
                "vgg_patientez.mp3",
                "vgg_classique.mp3"
            ],
            "VH1": [
                "vh1_paysan.mp3",
                "vh1_requise.mp3",
                "vh1_besoin.mp3",
                "vh1_classique.mp3"
            ],
            "VH2": [
                "vh2_ogre.mp3",
                "vh2_glandeur.mp3",
                "vh2_jecrois.mp3",
                "vh2_classique.mp3"
            ],
            "VH3": [
                "vh3_cantateur.mp3",
                "vh3_aussi.mp3",
                "vh3_pasderefus.mp3",
                "vh3_classique.mp3"
            ],
            "VHH": [
                "vhh_secours.mp3",
                "vhh_bougez.mp3",
                "vhh_please.mp3",
                "vhh_classique.mp3"
            ],
            "VHS": [
                "vhs_argh.mp3",
                "vhs_vhs.mp3",
                "vhs_pasennemis.mp3",
                "vhs_classique.mp3"
            ],
            "VI1": [
                "vi1_tous.mp3",
                "vi1_tranquille.mp3",
                "vi1_attention.mp3",
                "vi1_classique.mp3"
            ],
            "VI2": [
                "vi2_paspresse.mp3",
                "vi2_futur.mp3",
                "vi2_bientot.mp3",
                "vi2_classique.mp3"
            ],
            "VI3": [
                "vi3_spotted.mp3",
                "vi3_avis.mp3",
                "vi3_supriseparty.mp3",
                "vi3_classique.mp3"
            ],
            "VII": [
                "vii_panique.mp3",
                "vii_militaire.mp3",
                "vii_chic.mp3",
                "vii_classique.mp3"
            ],
            "VQ1": [
                "vq1_ordre.mp3",
                "vq1_please.mp3",
                "vq1_ennemi.mp3",
                "vq1_classique.mp3"
            ],
            "VQ2": [
                "vq2_essai.mp3",
                "vq2_conseil.mp3",
                "vq2_ennemi.mp3",
                "vq2_classique.mp3"
            ],
            "VQ3": [
                "vq3_repetition.mp3",
                "vq3_devinette.mp3",
                "vq3_ennemi.mp3",
                "vq3_classique.mp3"
            ],
            "VQF": [
                "vqf_irrite.mp3",
                "vqf_ennemi.mp3",
                "vqf_sentinelle.mp3",
                "vqf_classique.mp3"
            ],
            "VQG": [
                "vqg_danslordre.mp3",
                "vqg_oracles.mp3",
                "vqg_ennemi.mp3",
                "vqg_classique.mp3"
            ],
            "VQN": [
                "vqn_sivouple.mp3",
                "vqn_sortie.mp3",
                "vqn_toujours.mp3",
                "vqn_classique.mp3"
            ],
            "VQQ": [
                "vqq_devinette.mp3",
                "vqq_detectee.mp3",
                "vqq_ennemi.mp3",
                "vqq_classique.mp3"
            ],
            "VR1": [
                "vr1_probabilites.mp3",
                "vr1_suggestion.mp3",
                "vr1_transmission.mp3",
                "vr1_classique.mp3"
            ],
            "VR2": [
                "vr2_ordre.mp3",
                "vr2_encore.mp3",
                "vr2_tropavance.mp3",
                "vr2_classique.mp3"
            ],
            "VR3": [
                "vr3_diversionoupas.mp3",
                "vr3_troupeau.mp3",
                "vr3_aigu.mp3",
                "vr3_classique.mp3"
            ],
            "VRJ": [
                "vrj_comptine.mp3",
                "vrj_evacuation.mp3",
                "vrj_jumanji.mp3",
                "vrj_classique.mp3"
            ],
            "VRR": [
                "vrr_fuyons.mp3",
                "vrr_mechant.mp3",
                "vrr_strategie.mp3",
                "vrr_classique.mp3"
            ],
            "VRS": [
                "vrs_chanson.mp3",
                "vrs_forest.mp3",
                "vrs_run.mp3",
                "vrs_classique.mp3"
            ],
            "VSA1": [
                "vsa1_mouhaha.mp3",
                "vsa1_amoi.mp3",
                "vsa1_coucou.mp3",
                "vsa1_classique.mp3"
            ],
            "VSA2": [
                "vsa2_coucou.mp3",
                "vsa2_agent.mp3",
                "vsa2_pret.mp3",
                "vsa2_classique.mp3"
            ],
            "VSA3": [
                "vsa3_mieuxque.mp3",
                "vsa3_reproche.mp3",
                "vsa3_gauchedroite.mp3",
                "vsa3_classique.mp3"
            ],
            "VSAA": [
                "vsaa_affute.mp3",
                "vsaa_enfinesse.mp3",
                "vsaa_god.mp3",
                "vsaa_classique.mp3"
            ],
            "VSAF": [
                "vsaf_video.mp3",
                "vsaf_passeul.mp3",
                "vsaf_nevergiveup.mp3",
                "vsaf_classique.mp3"
            ],
            "VSAG": [
                "vsag_duel.mp3",
                "vsag_appel.mp3",
                "vsag_diversion.mp3",
                "vsag_classique.mp3"
            ],
            "VSAM": [
                "vsam_confiant.mp3",
                "vsam_seul.mp3",
                "vsam_barbare.mp3",
                "vsam_classique.mp3"
            ],
            "VSBB": [
                "vsbb_riregras.mp3",
                "vsbb_heure.mp3",
                "vsbb_meuh.mp3",
                "vsbb_classique.mp3"
            ],
            "VSBN": [
                "vsbn_racaille.mp3",
                "vsbn_darklord.mp3",
                "vsbn_drogue.mp3",
                "vsbn_classique.mp3"
            ],
            "VSBT": [
                "vsbt_servezvous.mp3",
                "vsbt_parrain.mp3",
                "vsbt_offre.mp3",
                "vsbt_classique.mp3"
            ],
            "VSD1": [
                "vsd1_heros.mp3",
                "vsd1_tranquille.mp3",
                "vsd1_renforts.mp3",
                "vsd1_classique.mp3"
            ],
            "VSD2": [
                "vsd2_hommedemain.mp3",
                "vsd2_bourrin.mp3",
                "vsd2_loading.mp3",
                "vsd2_classique.mp3"
            ],
            "VSD3": [
                "vsd3_paspresse.mp3",
                "vsd3_vieux.mp3",
                "vsd3_pirate.mp3",
                "vsd3_classique.mp3"
            ],
            "VSDD": [
                "vsdd_gandalf.mp3",
                "vsdd_brute.mp3",
                "vsdd_garde.mp3",
                "vsdd_classique.mp3"
            ],
            "VSDF": [
                "vsdf_confiant.mp3",
                "vsdf_chanson.mp3",
                "vsdf_ami.mp3",
                "vsdf_classique.mp3"
            ],
            "VSDG": [
                "vsdg_trade.mp3",
                "vsdg_touspareils.mp3",
                "vsdfg_chut.mp3",
                "vsdg_classique.mp3"
            ],
            "VSDM": [
                "vsdm_debut.mp3",
                "vsdm_trade.mp3",
                "vsdm_defenseur.mp3",
                "vsdm_classique.mp3"
            ],
            "VSG1": [
                "vsg1_pasrevenir.mp3",
                "vsg1_surprise.mp3",
                "vsg1_attention.mp3",
                "vsg1_classique.mp3"
            ],
            "VSG2": [
                "vsg2_riremechant.mp3",
                "vsg2_surprise.mp3",
                "vsg2_ogre.mp3",
                "vsg2_classique.mp3"
            ],
            "VSG3": [
                "vsg3_attention.mp3",
                "vsg3_coucou.mp3",
                "vsg3_livraison.mp3",
                "vsg3_classique.mp3"
            ],
            "VSGG": [
                "vsgg_banzai.mp3",
                "vsgg_bourrin.mp3",
                "vsgg_fou.mp3",
                "vsgg_classique.mp3"
            ],
            "VSO": [
                "vso_enthousiaste.mp3",
                "vso_paspresse.mp3",
                "vso_surlecoup.mp3",
                "vso_classique.mp3"
            ],
            "VSQ1": [
                "vsq1_quemoi.mp3",
                "vsq1_depassage.mp3",
                "vsq1_moi.mp3",
                "vsq1_classique.mp3"
            ],
            "VSQ2": [
                "vsq2_passeul.mp3",
                "vsq2_trois.mp3",
                "vsq2_deux.mp3",
                "vsq2_classique.mp3"
            ],
            "VSQ3": [
                "vsq3_paysan.mp3",
                "vsq3_ensuite.mp3",
                "vsq3_tropseul.mp3",
                "vsq3_classique.mp3"
            ],
            "VSQQ": [
                "vsqq_hack.mp3",
                "vsqq_chanson.mp3",
                "vsqq_seul.mp3",
                "vsqq_classique.mp3"
            ],
            "VSR": [
                "vsr_darkleader.mp3",
                "vsr_mememort.mp3",
                "vsr_pascourageux.mp3",
                "vsr_classique.mp3"
            ],
            "VSS": [
                "vss_mine.mp3",
                "vss_pascontent.mp3",
                "vss_please.mp3",
                "vss_classique.mp3"
            ],
            "VST1": [
                "vst1_pascontent.mp3",
                "vst1_pirate.mp3",
                "vst1_imbu.mp3",
                "vst1_classique.mp3"
            ],
            "VST2": [
                "vst2_ignore.mp3",
                "vst2_feeder.mp3",
                "vst2_desespere.mp3",
                "vst2_classique.mp3"
            ],
            "VST3": [
                "vst3_poeme.mp3",
                "vst3_mevoila.mp3",
                "vst3_fluet.mp3",
                "vst3_classique.mp3"
            ],
            "VSTB": [
                "vstb_luckyluke.mp3",
                "vstb_cartman.mp3",
                "vstb_insepapis.mp3",
                "vstb_classique.mp3"
            ],
            "VSTT": [
                "vstt_demon.mp3",
                "vstt_recoucou.mp3",
                "vstt_rocket.mp3",
                "vstt_classique.mp3"
            ],
            "VT1": [
                "vt1_orc.mp3",
                "vt1_loyal.mp3",
                "vt1_annonce.mp3",
                "vt1_classique.mp3"
            ],
            "VT2": [
                "vt2_prodigue.mp3",
                "vt2_bourré.mp3",
                "vt2_rassurant.mp3",
                "vt2_classique.mp3"
            ],
            "VT3": [
                "vt3_enfant.mp3",
                "vt3_chanson.mp3",
                "vt3_faussealerte.mp3",
                "vt3_classique.mp3"
            ],
            "VTT": [
                "vtt_immortels.mp3",
                "vtt_vigiepirate.mp3",
                "vtt_chanson.mp3",
                "vtt_classique.mp3"
            ],
            "VVA": [
                "vva_marchemarchepas.mp3",
                "vva_militaire.mp3",
                "vva_las.mp3",
                "vva_classique.mp3"
            ],
            "VVB": [
                "vvb_desuite.mp3",
                "vvb_ouf.mp3",
                "vvb_teatime.mp3",
                "vvb_classique.mp3"
            ],
            "VVC": [
                "vvc_fini.mp3",
                "vvc_deja.mp3",
                "vvc_missioncomplete.mp3",
                "vvc_classique.mp3"
            ],
            "VVGB": [
                "vvgb_aqueldieu.mp3",
                "vvgb_chanson.mp3",
                "vvgb_chansonnette.mp3",
                "vvgb_classique.mp3"
            ],
            "VVGF": [
                "vvgf_mamadou.mp3",
                "vvgf_coubertin.mp3",
                "vvgf_macabre.mp3",
                "vvgf_classique.mp3"
            ],
            "VVGG": [
                "vvgg_classique.mp3",
                "vvgg_fairplay.mp3",
                "vvgg_hannibal.mp3",
                "vvgg_merci.mp3"
            ],
            "VVGH": [
                "vvgh_hell.mp3",
                "vvgh_animaniacs.mp3",
                "vvgh_salutsalut.mp3",
                "vvgh_classique.mp3"
            ],
            "VVGL": [
                "vvgl_besoin.mp3",
                "vvgl_courage.mp3",
                "vvgl_superstitieux.mp3",
                "vvgl_classique.mp3"
            ],
            "VVGN": [
                "vvgn_exemple.mp3",
                "vvgn_hourra.mp3",
                "vvgn_bravo.mp3",
                "vvgn_classique.mp3"
            ],
            "VVGO": [
                "vvgo_grosdoigts.mp3",
                "vvgo_rabbi.mp3",
                "vvgo_pasexpres.mp3",
                "vvgo_classique.mp3"
            ],
            "VVGQ": [
                "vvgq_patiente.mp3",
                "vvgq_enerve.mp3",
                "vvgq_chut.mp3",
                "vvgq_classique.mp3"
            ],
            "VVGR": [
                "vvgr_prevenu.mp3",
                "vvgr_bientot.mp3",
                "vvgr_noproblemo.mp3",
                "vvgr_classique.mp3"
            ],
            "VVGS": [
                "vvgs_encore.mp3",
                "vvgs_ohoh.mp3",
                "vvgs_zut.mp3",
                "vvgs_classique.mp3"
            ],
            "VVGT": [
                "vvgt_tantpis.mp3",
                "vvgt_unpv.mp3",
                "vvgt_pasloin.mp3",
                "vvgt_classique.mp3"
            ],
            "VVGW": [
                "vvgw_job.mp3",
                "vvgw_pasmerci.mp3",
                "vvgw_poli.mp3",
                "vvgw_classique.mp3"
            ],
            "VVK": [
                "vvk_aie.mp3",
                "vvk_tel.mp3",
                "vvk_deloin.mp3",
                "vvk_classique.mp3"
            ],
            "VVM": [
                "vvm_batterie.mp3",
                "vvm_genkidama.mp3",
                "vvm_pasdemana.mp3",
                "vvm_classique.mp3"
            ],
            "VVN": [
                "vvn_humnon.mp3",
                "vvn_aucunechance.mp3",
                "vvn_dutout.mp3",
                "vvn_classique.mp3"
            ],
            "VVP": [
                "vvp_poli.mp3",
                "vvp_implorant.mp3",
                "vvp_allez.mp3",
                "vvp_classique.mp3"
            ],
            "VVS": [
                "vvp_pitivier.mp3",
                "vvp_poli.mp3",
                "vvp_maispastrop.mp3",
                "vvp_classique.mp3"
            ],
            "VVT": [
                "vvt_pasloin.mp3",
                "vvt_pasbesoin.mp3",
                "vvt_agace.mp3",
                "vvt_classique.mp3"
            ],
            "VVVA": [
                "vvva_explication.mp3",
                "vvva_bedivere.mp3",
                "vvva_murmure.mp3",
                "vvva_classique.mp3"
            ],
            "VVVB": [
                "vvvb_militaire.mp3",
                "vvvb_yeux.mp3",
                "vvvb_loki.mp3",
                "vvvb_classique.mp3"
            ],
            "VVVC": [
                "vvvc_wanted.mp3",
                "vvvc_personnel.mp3",
                "vvvc_proverbe.mp3",
                "vvvc_classique.mp3"
            ],
            "VVVD": [
                "vvvd_greve.mp3",
                "vvvd_pasencore.mp3",
                "vvvd_regarde.mp3",
                "vvvd_classique.mp3"
            ],
            "VVVE": [
                "vvve_jecours.mp3",
                "vvve_tapis.mp3",
                "vvve_jarrive.mp3",
                "vvve_classique.mp3"
            ],
            "VVVF": [
                "vvvf_engage.mp3",
                "vvvf_enthousiaste.mp3",
                "vvvf_scar.mp3",
                "vvvf_classique.mp3"
            ],
            "VVVG": [
                "vvvg_calin.mp3",
                "vvvg_photo.mp3",
                "vvvg_groupir.mp3",
                "vvvg_classique.mp3"
            ],
            "VVVJ": [
                "vvvj_militaire.mp3",
                "vvvj_fleurs.mp3",
                "vvvj_aucasou.mp3",
                "vvvj_classique.mp3"
            ],
            "VVVP": [
                "vvvp_siamois.mp3",
                "vvvp_darklord.mp3",
                "vvvp_militaire.mp3",
                "vvvp_classique.mp3"
            ],
            "VVVR": [
                "vvvr_megumin.mp3",
                "vvvr_nucleaire.mp3",
                "vvvr_magefou.mp3",
                "vvvr_classique.mp3"
            ],
            "VVVS": [
                "vvvs_soleil.mp3",
                "vvvs_guet.mp3",
                "vvvs_autoritaire.mp3",
                "vvvs_classique.mp3"
            ],
            "VVVT": [
                "vvvt_piegepiegepiege.mp3",
                "vvvt_imbecile.mp3",
                "vvvt_carte.mp3",
                "vvvt_classique.mp3"
            ],
            "VVVW": [
                "vvvw_silvousplait.mp3",
                "vvvw_diable.mp3",
                "vvvw_pret.mp3",
                "vvvw_classique.mp3"
            ],
            "VVVX": [
                "vvvx_rupture.mp3",
                "vvvx_sijysuis.mp3",
                "vvvx_dispersion.mp3",
                "vvvx_classique.mp3"
            ],
            "VVW": [
                "vvw_enattente.mp3",
                "vvw_proverbe.mp3",
                "vvw_citation.mp3",
                "vvw_classique.mp3"
            ],
            "VVX": [
                "vvx_nawak.mp3",
                "vvx_désole.mp3",
                "vvx_pasbonneidee.mp3",
                "vvx_classique.mp3"
            ],
            "VVY": [
                "vvy_militaire.mp3",
                "vvy_cestcela.mp3",
                "vvy_eneffet.mp3",
                "vvy_classique.mp3"
            ],

            "VARTHUR": "varthur_greataether.mp3",
            "VBIS": "vbis_raté.mp3",
            "VBONJOUR": "vbonjour_cava.mp3",
            "VCACHE": "vcache_secret.mp3",
            "VCAVA": "vcava_non.mp3",
            "VCUT": "vcut_tranche.mp3",
            "VKINGKKROOL": "vkingkkrool_pourquoi.mp3",
            "VMERCI": "vmerci_derien.mp3",
            "VMIAOU": "vmiaou_miaou.mp3",
            "VNOEL": "vnoel_ohohoh.mp3",
            "VPENTA": "vpenta_kill.mp3",
            "VPOESIE": "vpoesie_secret.mp3",
            "VPROVERBE": "vproverbe_cons.mp3",
            "VPSEUDO": "vpseudo_secret.mp3",
            "VTILI": "vtili_evan.mp3",
            "VVDK": [
                "vvdk_banana.mp3",
                "vvdk_dkdonkeykong.mp3",
                "vvdk_grossebaffe.mp3",
                "vvdk_ouga.mp3"
            ],
            "VVF6": [
                "vvf6_bouton.mp3",
                "vvf6_jecoutepas.mp3",
                "vvf6_non.mp3",
                "vvf6_oufseptplutôt.mp3"
            ],
            "VVF7": [
                "vvf7_mememort.mp3",
                "vvf7_neversurrend.mp3",
                "vvf7_pasfini.mp3",
                "vvf7_pasfini.mp3",
                "vvf7_peppy.mp3"
            ],
            "VVFILM": "vvfilm_prefere.mp3",
            "VVFIN": "vvfin_bye.mp3",
            "VVOUAF": "vvouaf_ouaf.mp3",
            "VSEIYA": "vseiya_oups.mp3"
        }
    }
]

const main = async () => {
    const data = await fsp.readdir('../ExportOutput')

    const result = data
        .filter((name) => name.startsWith('vgs_'))
        .reduce((acc, item) => {
            const [, god, ...rest] = item.split('_')
            const skinName = rest.join('_')

            if (skinName === '') {
                console.log({
                    god,
                    skinName,
                })
            }

            const data = acc.find((item) => item?.god === god)

            if (!data) {
                return [
                    ...acc,
                    {
                        god,
                        image: null,
                        skin: [
                            {
                                name: skinName === '' ? 'default' : skinName,
                                image: null,
                                folder: item
                            }
                        ]
                    }
                ]
            } else {
                return [
                    ...acc.filter((item) => item?.god !== god),
                    {
                        ...data,
                        skin: [
                            ...data.skin,
                            {
                                name: skinName === '' ? 'default' : skinName,
                                image: null,
                                folder: item
                            }
                        ]
                    }
                ]
            }
        }, [])

    const final = [
        ...customVoicePack,
        ...result
    ]

    await fsp.writeFile(path.join(__dirname, '..', 'voicepack.json'), JSON.stringify(final, null, 2))
}

main().catch(console.error)