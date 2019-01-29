config {
  spamProtectEmailAddresses = 2
  spamProtectEmailAddresses_atSubst = @
  compressJs = 1
  compressCss = 1
  concatenateJs = 1
  concatenateCss = 1
  moveJsFromHeaderToFooter = 1
  doctype = html5
  removeDefaultJS = external
  linkVars = L
  no_cache = 0
  prefixLocalAnchors = all
  renderCharset = utf-8
  metaCharset = utf-8
  debug = 0
  language = de
  sys_language_uid = 0
  locale_all = de_DE.utf-8
  simulateStaticDocuments = 0
  disablePrefixComment = 1
  tx_realurl_enable = 1
  sys_language_mode = strict
  sys_language_overlay = 0
  typolinkCheckRootline = 1
  contentObjectExceptionHandler = 0
  noPageTitle = 2
  absRefPrefix = http://www.muenker.com/
  
}
tmp.content < styles.content.get

tmp.canonical = TEXT
tmp.canonical {
  typolink.parameter.data = TSFE:id
  typolink.returnLast = url
  wrap = <link rel="canonical" href="|"  />
}
[globalVar = GP:tx_news_pi1|news > 0]

tmp.breadcrumb_news = CONTENT
tmp.breadcrumb_news {
    table = tx_news_domain_model_news
    select {
        pidInList = 850
        uidInList.data = GP:tx_news_pi1|news
        languageField = sys_language_uid
    }
    renderObj = TEXT
    renderObj.field = title
}
[global]
[globalVar = GP:tx_riglossar_glossar|glossar > 0]
tmp.breadcrumb_glossar = CONTENT
tmp.breadcrumb_glossar {
    table = tx_riglossar_domain_model_glossar
    select {
        pidInList = 740
        uidInList.data = GP:tx_riglossar_glossar|glossar 
        languageField = sys_language_uid
    }
    renderObj = TEXT
    renderObj.field = title
}
[global]
[globalVar = TSFE:id = 125]
tmp.sword = TEXT
tmp.sword.value = true
[global]


page = PAGE
page {
  typeNum = 0
  shortcutIcon = fileadmin/favicon.ico
  bodyTagCObject >
  bodyTagCObject = TEXT
  bodyTagCObject {
    field = uid
    dataWrap = <body itemscope itemtype="http://schema.org/WebPage" id="page-|" class="de belayout-{field:backend_layout} felayout-{field:layout}">
  }
  10 = FLUIDTEMPLATE
  10 {
    file.cObject = CASE
    file.cObject {  
      key.data = levelfield:-2, backend_layout_next_level, slide
      key.override.field = backend_layout
      
      3 = TEXT
      3.value = EXT:fx_muenker/Ressources/Private/Templates/pages/Sidebar.html
      
            4 = TEXT
      4.value = EXT:fx_muenker/Ressources/Private/Templates/pages/Products.html
            
      default = TEXT
      default.value = EXT:fx_muenker/Ressources/Private/Templates/pages/Default.html
    }
    layoutRootPaths {
      10 = EXT:fx_muenker/Ressources/Private/Layouts/pages/
    }
    partialRootPaths {
      10 =  EXT:fx_muenker/Ressources/Private/Partials/pages/
    }
    variables {       
      content < tmp.content

      head < styles.content.get
      head.select.where = colPos=1
      head.wrap = <div class="head">|</div>

      sidebar < styles.content.get
      sidebar.select.where = colPos=3
      
      footer < styles.content.get
      footer.select.where = colPos=2
      footer.slide = -1
            
            breadcrumb_news < tmp.breadcrumb_news
            breadcrumb_glossar < tmp.breadcrumb_glossar
      sword < tmp.sword
    }
  }
  headerData {
  1 >
    5 = TEXT
    5.value = <script>document.cookie='resolution='+Math.max(screen.width,screen.height)+'; path=/';</script>
    10 = TEXT
    10.value = <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> 
    40 = TEXT
    40 {
        stdWrap.cObject = COA
        stdWrap.cObject {
            10 = TEXT
            10 {
                field = subtitle//title
                noTrimWrap = |<title>|  |
            }
            20 < styles.content.get
            20 {
                select.max = 1
                renderObj >
                renderObj = TEXT
                renderObj.field = header
                stdWrap.noTrimWrap = | • ||
                stdWrap.required = 1
            }
      20 >
            30 = TEXT
            30.noTrimWrap = || • Münker Metallprofile GmbH</title>|
        }
    }
    50 = HMENU
    50  {
    special = language
    special.value = 0,3,4
    wrap = |
    1 = TMENU
    1 {
      noBlur = 1
      # Standard Sprachen
      NO = 1
      NO {
        linkWrap = <link rel="alternate" hreflang="x-default" href="|">||<link rel="alternate" hreflang="en" href="|">||<link rel="alternate" hreflang="cs" href="|">
        doNotLinkIt = 1
        stdWrap.typolink.parameter.data = page:uid
        stdWrap.typolink.additionalParams = &L=0 ||  &L=3  ||  &L=4
        stdWrap.typolink.target = _self
        stdWrap.typolink.addQueryString = 1
        stdWrap.typolink.addQueryString.exclude = L,id,cHash
        stdWrap.typolink.addQueryString.method = GET
        stdWrap.typolink.useCacheHash = 1
        stdWrap.typolink.no_cache = 0
        stdWrap.typolink.returnLast = url
      } 
      
      USERDEF1 = 1
      USERDEF1.doNotShowLink = 1
    }
  }
  
  80 = COA
  80 {
    1 = TEXT
    1.field = ogtitle//title
    1.stdWrap.wrap = <meta property="og:title" content="|" />
    1.stdWrap.required = 1
    2 = TEXT
    2.field = ogdescription//description
    2.stdWrap.wrap = <meta property="og:description" content="|" />
    2.stdWrap.required = 1
    3 = FILES
    3 {
      references {
        table = pages
        uid.current = 1
        fieldName = ogimage
      }
      renderObj = TEXT
      renderObj {
        data = file:current:publicUrl
        stdWrap.wrap = <meta property="og:image" content="|" />
        stdWrap.required = 1
      }
    }

    4 = TEXT
    4 {
      wrap = <meta property="og:url" content="|" />
      typolink.parameter.data = page:uid
      typolink.target = _self
      typolink.addQueryString = 1
      typolink.addQueryString.exclude = id,cHash
      typolink.addQueryString.method = GET
      typolink.useCacheHash = 1
      typolink.no_cache = 0
      typolink.returnLast = url
    }
  }
 }
  
  includeCSS {
    bootstrap = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css
        bootstrap.external = 1
    bootstrap {
            forceOnTop = 1
            media = all
    }
    bootstraptheme = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css
        bootstraptheme.external = 1
    bootstraptheme {
      media = all
    }
    # awesome = EXT:fx_muenker/Ressources/Public/CSS/font-awesome.css
    # awesome {
      # media = screen
    # }
    fancy = EXT:fx_muenker/Ressources/Public/CSS/fancybox/jquery.fancybox.css
    fancy {
      media = screen
     }

    owl1 = EXT:fx_muenker/Ressources/Public/CSS/owl/owl.carousel.css
    owl1 {
      media = screen
    }
    
    stylesheet = EXT:fx_muenker/Ressources/Public/CSS/stylesheet.css
    stylesheet.media = screen

  }
    includeJSLibs {
        jquery = https://code.jquery.com/jquery-2.2.4.min.js
    jquery {
            external = 1
      forceOnTop = 1
      disableCompression = 1
      excludeFromConcatenation = 1
    } 
           
    bootstrap = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
        bootstrap {
            external = 1
      disableCompression = 1
      excludeFromConcatenation = 1
    } 
        
    }
  includeJS {
    #jquery = https://code.jquery.com/jquery-3.1.1.slim.min.js
      
        tether = https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js
    tether {
            external = 1
      disableCompression = 1
      excludeFromConcatenation = 1
    } 
     
  }
  includeJSFooter { 
    owl = EXT:fx_muenker/Ressources/Public/JavaScript/owl/owl.carousel.js
    fancy = EXT:fx_muenker/Ressources/Public/JavaScript/fancybox/jquery.fancybox.js
        jcarousel = EXT:fx_muenker/Ressources/Public/JavaScript/jcarousel.js
        farbwechsler = EXT:fx_muenker/Ressources/Public/JavaScript/farbwechsler.js
    custom = EXT:fx_muenker/Ressources/Public/JavaScript/javascript.js
  }
  meta {
    robots = index,follow
    description.field = description
        description.stdWrap.stripHtml = 1
  }
}
plugin {
  tx_kesearch_pi1 {
    templateRootPaths.5 = EXT:fx_muenker/Ressources/Private/Templates/ke_search/
    partialRootPaths.5 = EXT:fx_muenker/Ressources/Private/Partials/ke_search/
    layoutRootPaths.5 = EXT:fx_muenker/Ressources/Private/Layouts/ke_search/
  }
  tx_kesearch_pi2 {
    highlightedWord_stdWrap.wrap = <div class="mark">|</div>  
  }
  tx_news {
    settings {
    link.skipControllerAndAction = 1
      list {
        link = 68
        media.image {
          maxWidth = 270
          maxHeight = 270
          liste {
            maxWidth = 600
            maxHeight = 300
          }
        }
      }
    }
    _LOCAL_LANG {
      de {
        morenews = mehr News
        dateFormat = %d.%m.%Y
        more-link = weiter lesen
      }
      en {
        morenews = more News
        dateFormat = %d.%m.%Y
        more-link = continue reading
      }
      nl {
        morenews = meer nieuws
        dateFormat = %d.%m.%Y
        more-link = Verder lezen
      }
    }
  }
  tx_femanager {
    _LOCAL_LANG {
      de {
        tx_femanager_domain_model_user.email = Bsp: max.mustermann@musterfirma.de
      }
    }
  }
}


tt_content {  
  gridelements_pi1.20.stdWrap.outerWrap.cObject = CASE
  gridelements_pi1.20.stdWrap.outerWrap.cObject {
      key.field = layout
      default = TEXT
      default.value = <div class="container grid griduid-{field:tx_gridelements_backend_layout} {field:ricobgcolor} distance-before-{field:ricodistancebefore} distance-after-{field:ricodistanceafter}">|</div>  
      default.insertData = 1  
      0 = TEXT
      0.value = <div class="container grid griduid-{field:tx_gridelements_backend_layout} {field:ricobgcolor} distance-before-{field:ricodistancebefore} distance-after-{field:ricodistanceafter}">|</div> 
      0.insertData = 1 
      1 = TEXT
      1.value = <div class="container-fluid grid griduid-{field:tx_gridelements_backend_layout} {field:ricobgcolor} distance-before-{field:ricodistancebefore} distance-after-{field:ricodistanceafter}">|</div>
      1.insertData = 1  
      2 = TEXT
      2.value = <div class="grid griduid-{field:tx_gridelements_backend_layout} {field:ricobgcolor} distance-before-{field:ricodistancebefore} distance-after-{field:ricodistanceafter}">|</div>
      2.insertData = 1  
      5 = TEXT
      5.value = <div class="container produktbox grid griduid-{field:tx_gridelements_backend_layout} {field:ricobgcolor} distance-before-{field:ricodistancebefore} distance-after-{field:ricodistanceafter}">|</div>
      5.insertData = 1  
  }
}
tt_content.gridelements_pi1.20.10.setup { 
  3 < lib.gridelements.defaultGridSetup
  3.wrap = <div class="content-wrap griduid-{field:tx_gridelements_backend_layout} {field:ricobgcolor} distance-before-{field:ricodistancebefore} distance-after-{field:ricodistanceafter}">|</div>
  3.insertData = 1
}

tt_content.gridelements_pi1.20.wrap.insertData = 1

[browser = msie] AND [version =< 10]
config.moveJsFromHeaderToFooter = 0
#page.includeCSS.ie = fileadmin/muenker/css/ie.css
page.includeJSlibs {
  modernizr = https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js
  modernizr.external = 1
  modernizr.disableCompression = 1
  modernizr.excludeFromConcatenation = 1
  respond = https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js
  respond.external = 1
  respond.disableCompression = 1
  respond.excludeFromConcatenation = 1
  placeholder = https://cdnjs.cloudflare.com/ajax/libs/placeholders/4.0.1/placeholders.jquery.min.js
  placeholder.external = 1
  placeholder.disableCompression = 1
  placeholder.excludeFromConcatenation = 1
  #ie = fileadmin/muenker/js/ie.js
}    
[global]

lib.parseFunc_RTE.tags.link.typolink.target.override = _self

[globalVar = GP:L = 3]
config {
  sys_language_uid = 3
  locale_all = en_EN.UTF-8
  language = en
  htmlTag_langKey = en
  htmlTag_setParams = class="no-js" lang="en"
}
page.bodyTagCObject >
page.bodyTagCObject = TEXT
page.bodyTagCObject {
  field = uid
  dataWrap = <body itemscope itemtype="http://schema.org/WebPage" id="page-|" class="en belayout-{field:backend_layout} felayout-{field:layout}">
}
[global]
[globalVar = GP:L = 4]
config {
  sys_language_uid = 4
  locale_all = cs_CS.UTF-8
  language = cs
  htmlTag_langKey = cs
  htmlTag_setParams = class="no-js" lang="cs"
}
page.bodyTagCObject >
page.bodyTagCObject = TEXT
page.bodyTagCObject {
  field = uid
  dataWrap = <body itemscope itemtype="http://schema.org/WebPage" id="page-|" class="cs belayout-{field:backend_layout} felayout-{field:layout}">
}
[global]
lib.tx_news.contentElementRendering >
lib.tx_news.contentElementRendering = CONTENT
lib.tx_news.contentElementRendering {
  table = tt_content
  select {
    #pidInList = 47,179
    uidInList.current = 1
    orderBy = sorting
    languageField = sys_language_uid
  }
}


config.noScaleUp = 1
lib.fluidContent.settings.media.popup.width = 1920m
lib.fluidContent.settings.media.popup.height = 1080m

tt_content.gridelements_pi1.20.10.setup.accordion.columns.101.renderObj.20.gridelements_pi1 = < tt_content.gridelements_pi1
#lib.fluidContent.stdWrap.dataWrap.override = <div class="parallax" data-parallax='{field:parallaxattribute}'>|</div>
lib.bootstrap_grids.accordion.columns.101.renderObj.10.wrap = <div class="panel-heading"><h2 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-{field:tx_gridelements_container}" href="#collapse-{field:uid}" aria-expanded="false" aria-controls="collapse-{field:uid}" class="collapsed accordion-toggle">|</a></h2></div><div id="collapse-{field:uid}" class="panel-collapse collapse" role="tabpanel"><div class="panel-body">
tt_content.gridelements_pi1.20.10.setup.accordion.columns.101.renderObj.10.wrap = <div class="panel-heading"><h2 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-{field:tx_gridelements_container}" href="#collapse-{field:uid}" aria-expanded="false" aria-controls="collapse-{field:uid}" class="collapsed accordion-toggle">|</a></h2></div><div id="collapse-{field:uid}" class="panel-collapse collapse" role="tabpanel"><div class="panel-body">
plugin.tx_news.settings.list.paginate.insertAbove = 0

plugin.tx_kesearch_pi2.templateRootPath = EXT:fx_muenker/Ressources/Private/Templates/ke_search/
plugin.tx_kesearch_pi2.layoutRootPath = EXT:fx_muenker/Ressources/Private/Layouts/ke_search/
plugin.tx_kesearch_pi2.partialRootPath = EXT:fx_muenker/Ressources/Private/Partials/ke_search/

lib.language = COA
lib.language {
    20 = HMENU
    20 {
        special = language
        special.value = 0,3,4
        special.normalWhenNoLanguage = 0
        wrap =
        1 = TMENU
        1 {
            noBlur = 1
            NO = 1
            NO {
                doNotLinkIt = 1
                linkWrap = <li>|</li>
                stdWrap.override = Deutsch || English || český
                stdWrap {
                    typolink {
                        parameter.data = page:uid
                        additionalParams = &L=0 || &L=3 || &L=4
                        ATagParams = hreflang="en-GB" || hreflang="de-DE" || hreflang="da-DK"
                        addQueryString = 1
                        addQueryString.exclude = L,id,cHash,no_cache
                        addQueryString.method = GET
                        useCacheHash = 1
                        no_cache = 0
                    }
                }
            }

            ACT < .NO
            ACT.linkWrap = <li class="active">|</li>

            USERDEF1 < .NO
            USERDEF1 {
                linkWrap = <li class="text-muted">|</li>
                stdWrap.typolink >
            }

            USERDEF2 < .ACT
            USERDEF2 {
                linkWrap = <li class="text-muted">|</li>
                stdWrap.typolink >
            }
        }
    }

    wrap = <ul id="language_menu" class="language-menu">|</ul>
}


plugin.tx_linkhandler {
    tx_riglossar_domain_model_glossar {
        forceLink = 0
        typolink {
          parameter = 642
          additionalParams = &tx_riglossar_glossar[glossar]={field:uid}
          additionalParams.insertData = 1
          useCacheHash = 1
        }
  }
  tx_news_domain_model_news {
    forceLink = 0
    typolink {
      parameter = 916
      additionalParams = &tx_news_pi1[news]={field:uid}
      additionalParams.insertData = 1
      useCacheHash = 1
    }
  }
}

[globalVar = GP:iFramedDownloadArchive = 1]
  page.bodyTag = <body class="i-framed-download-archive">
[global]

downloadarchive = PAGE
downloadarchive {
  typeNum = 255
  config {
    disableAllHeaderCode = 0
    no_cache = 1
    xhtml_cleaning = 0
    admPanel = 0
  }
  includeJS {
    jquery = fileadmin/muenker/js/jquery.min.js
    jquery {
      forceOnTop = 1
      disableCompression = 1
      excludeFromConcatenation = 1
    } 
  }
    bodyTag >
  bodyTagCObject = TEXT
  bodyTagCObject.value = iframe
  bodyTagCObject.wrap = <body class="|">
  10 < styles.content.get
  
}

[globalVar = GP:tx_news_pi1|news > 0]
page.headerData {
    40.stdWrap.cObject {
        10 < tmp.breadcrumb_news
        10.stdWrap.noTrimWrap = |<title>|  |
    }
}
[global]
[globalVar = GP:tx_riglossar_glossar|glossar > 0]
page.headerData {
    40.stdWrap.cObject {
        10 < tmp.breadcrumb_glossar
        10.stdWrap.noTrimWrap = |<title>|  |
    }
}
[global]

