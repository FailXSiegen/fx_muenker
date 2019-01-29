RTE.default.buttons.link.queryParametersSelector.enabled = 1

##id storagepage of gridlayout
TCEFORM.pages.backend_layout.PAGE_TSCONFIG_ID = 630
TCEFORM.pages.backend_layout_next_level.PAGE_TSCONFIG_ID = 630

##hide no backend layout label
TCEFORM.pages.backend_layout_next_level.removeItems= -1
TCEFORM.pages.backend_layout.removeItems= -1

TCEFORM {
  tt_content {
    layout {
      altLabels {
        0 = Default
        1 = Container
        2 = Container-fluid
        3 = Nowrap     
      }
     
      types.textmedia {
        addItems {
			4 = Kategoriebox
        }
      }
      types.gridelements_pi1 {
        addItems {
			5 = Produktbox
        } 
      }
    }
    subheader.disabled = 0
    header_layout {
      altLabels {
        0 = Default
        1 = H1
        2 = H2
        3 = H3
        4 = H4
        5 = H5
      }
    }
  }  
  tx_powermail_domain_model_forms {
    css {
      removeItems = layout1, layout2, layout3
      addItems {
        col-md-1 = col-md-1
        col-md-2 = col-md-2
        col-md-3 = col-md-3
        col-md-4 = col-md-4
        col-md-5 = col-md-5
        col-md-6 = col-md-6
        col-md-7 = col-md-7
        col-md-8 = col-md-8
        col-md-9 = col-md-9
        col-md-10 = col-md-10
        col-md-11 = col-md-11
        col-md-12 = col-md-12
        row = row
      }
    }
  } 
  tx_powermail_domain_model_pages < .tx_powermail_domain_model_forms
  tx_powermail_domain_model_fields < .tx_powermail_domain_model_forms
}
tx_news.templateLayouts {
  1 = Default
  2 = 2 Spaltig
}
RTE.default.buttons.link.page.properties.target.default = _self
RTE.default {
  buttons.link.properties.class.allowedClasses := addToList(cta, btn btn-primary, btn btn-info, btn btn-default) 
  proc.allowedClasses := addToList(cta, btn btn-primary, btn btn-info, btn btn-default) 
  proc.allowedClasses = external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail, 
  proc.allowedClasses := addToList(align-left, align-center, align-right, align-justify)
  proc.allowedClasses := addToList(csc-frame-frame1, csc-frame-frame2)
  proc.allowedClasses := addToList(component-items, action-items)
  proc.allowedClasses := addToList(component-items-ordered, action-items-ordered)
  proc.allowedClasses := addToList(important, name-of-person, detail)
  proc.allowedClasses := addToList(indent)
  buttons.blockstyle.tags.div.allowedClasses = align-left, align-center, align-right
  buttons.blockstyle.tags.div.allowedClasses := addToList(csc-frame-frame1, csc-frame-frame2)
  buttons.blockstyle.tags.table.allowedClasses = csc-frame-frame1, csc-frame-frame2
  buttons.blockstyle.tags.td.allowedClasses = align-left, align-center, align-right
  buttons.textstyle.tags.span.allowedClasses = important, name-of-person, detail
  disableAlignmentFieldsetInTableOperations = 1
  disableSpacingFieldsetInTableOperations = 1
  disableColorFieldsetInTableOperations = 1
  disableLayoutFieldsetInTableOperations = 1
}
RTE.classesAnchor.newink { 
  name = cta
}
RTE.default {
	#angepasste CSS Datei in fileadmin speichern
	contentCSS = fileadmin/riconet/css/rte.css
	buttons.link.properties.class.allowedClasses = btn-default,btn-primary
	buttons.link.page.properties.class.default = 
	buttons.link.url.properties.class.default =
	buttons.link.file.properties.class.default = 
	buttons.link.mail.properties.class.default = 
	buttons.link.dialogueWindow.width = 800

}
tx_news.module {
	preselect {
		sortingField = datetime
		sortingDirection = desc
	}
}
RTE.default.buttons.link.dialogueWindow.width = 1280
RTE.default.buttons.link.dialogueWindow.height = 1280

TCEMAIN.table.pages {
    disablePrependAtCopy = 1
    disableHideAtCopy = 1
}
TCEMAIN.table.tt_content {
    disablePrependAtCopy = 1
    disableHideAtCopy = 1
}
TCEMAIN.table.sys_file_reference {
    disablePrependAtCopy = 1
    disableHideAtCopy = 1
}
TCEFORM.tt_address.latitude.disabled = 1
TCEFORM.tt_address.longitude.disabled = 1

TCEMAIN.linkHandler {
    tx_riglossar_domain_model_glossar {
	  handler = TYPO3\CMS\Recordlist\LinkHandler\RecordLinkHandler
	  label = Glossar
	  configuration {
	    table = tx_riglossar_domain_model_glossar
	    storagePid = 740
		hidePageTree = 1
	  }
	  scanBefore = page
	}
	tx_news_domain_model_news {
	  handler = TYPO3\CMS\Recordlist\LinkHandler\RecordLinkHandler
	  label = LLL:EXT:linkhandler/Resources/Private/Language/locallang.xlf:tab.news
	  configuration {
	    table = tx_news_domain_model_news
	    storagePid = 850
		hidePageTree = 1
	  }
	  scanBefore = page
	}
}
