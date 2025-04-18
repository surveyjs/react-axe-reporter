var results = {
    "testEngine": {
        "name": "axe-core",
        "version": "4.10.3"
    },
    "testRunner": {
        "name": "axe"
    },
    "testEnvironment": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
        "windowWidth": 1885,
        "windowHeight": 900,
        "orientationAngle": 0,
        "orientationType": "landscape-primary"
    },
    "timestamp": "2025-04-15T12:52:34.472Z",
    "url": "https://surveyjstest.azurewebsites.net/form-library/examples/dynamic-matrix-add-new-rows/reactjs",
    "toolOptions": {
        "reporter": "v1"
    },
    "inapplicable": [
        {
            "id": "accesskeys",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "best-practice"
            ],
            "description": "Ensure every accesskey attribute value is unique",
            "help": "accesskey attribute value should be unique",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/accesskeys?application=axeAPI",
            "nodes": []
        },
        {
            "id": "area-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag244",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.2.4.4",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure <area> elements of image maps have alternative text",
            "help": "Active <area> elements must have alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/area-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-braille-equivalent",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",
            "help": "aria-braille attributes must have a non-braille equivalent",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-braille-equivalent?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-command-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure every ARIA button, link and menuitem has an accessible name",
            "help": "ARIA commands must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-command-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-dialog-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "best-practice"
            ],
            "description": "Ensure every ARIA dialog and alertdialog node has an accessible name",
            "help": "ARIA dialog and alertdialog nodes should have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-hidden-body",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag131",
                "wcag412",
                "EN-301-549",
                "EN-9.1.3.1",
                "EN-9.4.1.2"
            ],
            "description": "Ensure aria-hidden=\"true\" is not present on the document body.",
            "help": "aria-hidden=\"true\" must not be present on the document body",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-hidden-body?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-input-field-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure every ARIA input field has an accessible name",
            "help": "ARIA input fields must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-input-field-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-meter-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag111",
                "EN-301-549",
                "EN-9.1.1.1"
            ],
            "description": "Ensure every ARIA meter node has an accessible name",
            "help": "ARIA meter nodes must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-meter-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-progressbar-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag111",
                "EN-301-549",
                "EN-9.1.1.1"
            ],
            "description": "Ensure every ARIA progressbar node has an accessible name",
            "help": "ARIA progressbar nodes must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-progressbar-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-required-children",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure elements with an ARIA role that require child roles contain them",
            "help": "Certain ARIA roles must contain particular children",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-required-children?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-required-parent",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure elements with an ARIA role that require parent roles are contained by them",
            "help": "Certain ARIA roles must be contained by particular parents",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-required-parent?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-text",
            "impact": null,
            "tags": [
                "cat.aria",
                "best-practice"
            ],
            "description": "Ensure role=\"text\" is used on elements with no focusable descendants",
            "help": "\"role=text\" should have no focusable descendants",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-text?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-toggle-field-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure every ARIA toggle field has an accessible name",
            "help": "ARIA toggle fields must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-toggle-field-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-tooltip-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure every ARIA tooltip node has an accessible name",
            "help": "ARIA tooltip nodes must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-tooltip-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "aria-treeitem-name",
            "impact": null,
            "tags": [
                "cat.aria",
                "best-practice"
            ],
            "description": "Ensure every ARIA treeitem node has an accessible name",
            "help": "ARIA treeitem nodes should have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-treeitem-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "blink",
            "impact": null,
            "tags": [
                "cat.time-and-media",
                "wcag2a",
                "wcag222",
                "section508",
                "section508.22.j",
                "TTv5",
                "TT2.b",
                "EN-301-549",
                "EN-9.2.2.2"
            ],
            "description": "Ensure <blink> elements are not used",
            "help": "<blink> elements are deprecated and must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/blink?application=axeAPI",
            "nodes": []
        },
        {
            "id": "definition-list",
            "impact": null,
            "tags": [
                "cat.structure",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure <dl> elements are structured correctly",
            "help":"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, \\x3Cscript>, <template> or <div> elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/definition-list?application=axeAPI",
            "nodes": []
        },
        {
            "id": "dlitem",
            "impact": null,
            "tags": [
                "cat.structure",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure <dt> and <dd> elements are contained by a <dl>",
            "help": "<dt> and <dd> elements must be contained by a <dl>",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/dlitem?application=axeAPI",
            "nodes": []
        },
        {
            "id": "document-title",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag242",
                "TTv5",
                "TT12.a",
                "EN-301-549",
                "EN-9.2.4.2",
                "ACT"
            ],
            "description": "Ensure each HTML document contains a non-empty <title> element",
            "help": "Documents must have <title> element to aid in navigation",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/document-title?application=axeAPI",
            "nodes": []
        },
        {
            "id": "duplicate-id-aria",
            "impact": null,
            "tags": [
                "cat.parsing",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure every id attribute value used in ARIA and in labels is unique",
            "help": "IDs used in ARIA and labels must be unique",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/duplicate-id-aria?application=axeAPI",
            "nodes": []
        },
        {
            "id": "frame-focusable-content",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "wcag2a",
                "wcag211",
                "TTv5",
                "TT4.a",
                "EN-301-549",
                "EN-9.2.1.1"
            ],
            "description": "Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",
            "help": "Frames with focusable content must not have tabindex=-1",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/frame-focusable-content?application=axeAPI",
            "nodes": []
        },
        {
            "id": "frame-tested",
            "impact": null,
            "tags": [
                "cat.structure",
                "best-practice",
                "review-item"
            ],
            "description": "Ensure <iframe> and <frame> elements contain the axe-core script",
            "help": "Frames should be tested with axe-core",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/frame-tested?application=axeAPI",
            "nodes": []
        },
        {
            "id": "frame-title-unique",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT12.d",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure <iframe> and <frame> elements contain a unique title attribute",
            "help": "Frames must have a unique title attribute",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/frame-title-unique?application=axeAPI",
            "nodes": []
        },
        {
            "id": "frame-title",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.i",
                "TTv5",
                "TT12.d",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure <iframe> and <frame> elements have an accessible name",
            "help": "Frames must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/frame-title?application=axeAPI",
            "nodes": []
        },
        {
            "id": "html-has-lang",
            "impact": null,
            "tags": [
                "cat.language",
                "wcag2a",
                "wcag311",
                "TTv5",
                "TT11.a",
                "EN-301-549",
                "EN-9.3.1.1",
                "ACT"
            ],
            "description": "Ensure every HTML document has a lang attribute",
            "help": "<html> element must have a lang attribute",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/html-has-lang?application=axeAPI",
            "nodes": []
        },
        {
            "id": "html-lang-valid",
            "impact": null,
            "tags": [
                "cat.language",
                "wcag2a",
                "wcag311",
                "TTv5",
                "TT11.a",
                "EN-301-549",
                "EN-9.3.1.1",
                "ACT"
            ],
            "description": "Ensure the lang attribute of the <html> element has a valid value",
            "help": "<html> element must have a valid value for the lang attribute",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/html-lang-valid?application=axeAPI",
            "nodes": []
        },
        {
            "id": "html-xml-lang-mismatch",
            "impact": null,
            "tags": [
                "cat.language",
                "wcag2a",
                "wcag311",
                "EN-301-549",
                "EN-9.3.1.1",
                "ACT"
            ],
            "description": "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
            "help": "HTML elements with lang and xml:lang must have the same base language",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/html-xml-lang-mismatch?application=axeAPI",
            "nodes": []
        },
        {
            "id": "image-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT7.a",
                "TT7.b",
                "EN-301-549",
                "EN-9.1.1.1",
                "ACT"
            ],
            "description": "Ensure <img> elements have alternative text or a role of none or presentation",
            "help": "Images must have alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/image-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "image-redundant-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "best-practice"
            ],
            "description": "Ensure image alternative is not repeated as text",
            "help": "Alternative text of images should not be repeated as text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "input-image-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT7.a",
                "EN-301-549",
                "EN-9.1.1.1",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure <input type=\"image\"> elements have alternative text",
            "help": "Image buttons must have alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/input-image-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-banner-is-top-level",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the banner landmark is at top level",
            "help": "Banner landmark should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-banner-is-top-level?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-complementary-is-top-level",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the complementary landmark or aside is at top level",
            "help": "Aside should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-complementary-is-top-level?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-contentinfo-is-top-level",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the contentinfo landmark is at top level",
            "help": "Contentinfo landmark should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-contentinfo-is-top-level?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-main-is-top-level",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the main landmark is at top level",
            "help": "Main landmark should not be contained in another landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-main-is-top-level?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-no-duplicate-banner",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the document has at most one banner landmark",
            "help": "Document should not have more than one banner landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-banner?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-no-duplicate-contentinfo",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the document has at most one contentinfo landmark",
            "help": "Document should not have more than one contentinfo landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-contentinfo?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-no-duplicate-main",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the document has at most one main landmark",
            "help": "Document should not have more than one main landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-no-duplicate-main?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-one-main",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the document has a main landmark",
            "help": "Document should have one main landmark",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-one-main?application=axeAPI",
            "nodes": []
        },
        {
            "id": "landmark-unique",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure landmarks are unique",
            "help": "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/landmark-unique?application=axeAPI",
            "nodes": []
        },
        {
            "id": "link-in-text-block",
            "impact": null,
            "tags": [
                "cat.color",
                "wcag2a",
                "wcag141",
                "TTv5",
                "TT13.a",
                "EN-301-549",
                "EN-9.1.4.1"
            ],
            "description": "Ensure links are distinguished from surrounding text in a way that does not rely on color",
            "help": "Links must be distinguishable without relying on color",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/link-in-text-block?application=axeAPI",
            "nodes": []
        },
        {
            "id": "link-name",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag244",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.2.4.4",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure links have discernible text",
            "help": "Links must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/link-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "list",
            "impact": null,
            "tags": [
                "cat.structure",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure that lists are structured correctly",
            "help":"<ul> and <ol> must only directly contain <li>, \\x3Cscript> or <template> elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/list?application=axeAPI",
            "nodes": []
        },
        {
            "id": "listitem",
            "impact": null,
            "tags": [
                "cat.structure",
                "wcag2a",
                "wcag131",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure <li> elements are used semantically",
            "help": "<li> elements must be contained in a <ul> or <ol>",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/listitem?application=axeAPI",
            "nodes": []
        },
        {
            "id": "marquee",
            "impact": null,
            "tags": [
                "cat.parsing",
                "wcag2a",
                "wcag222",
                "TTv5",
                "TT2.b",
                "EN-301-549",
                "EN-9.2.2.2"
            ],
            "description": "Ensure <marquee> elements are not used",
            "help": "<marquee> elements are deprecated and must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/marquee?application=axeAPI",
            "nodes": []
        },
        {
            "id": "meta-refresh",
            "impact": null,
            "tags": [
                "cat.time-and-media",
                "wcag2a",
                "wcag221",
                "TTv5",
                "TT8.a",
                "EN-301-549",
                "EN-9.2.2.1"
            ],
            "description": "Ensure <meta http-equiv=\"refresh\"> is not used for delayed refresh",
            "help": "Delayed refresh under 20 hours must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/meta-refresh?application=axeAPI",
            "nodes": []
        },
        {
            "id": "meta-viewport-large",
            "impact": null,
            "tags": [
                "cat.sensory-and-visual-cues",
                "best-practice"
            ],
            "description": "Ensure <meta name=\"viewport\"> can scale a significant amount",
            "help": "Users should be able to zoom and scale the text up to 500%",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/meta-viewport-large?application=axeAPI",
            "nodes": []
        },
        {
            "id": "meta-viewport",
            "impact": null,
            "tags": [
                "cat.sensory-and-visual-cues",
                "wcag2aa",
                "wcag144",
                "EN-301-549",
                "EN-9.1.4.4",
                "ACT"
            ],
            "description": "Ensure <meta name=\"viewport\"> does not disable text scaling and zooming",
            "help": "Zooming and scaling must not be disabled",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/meta-viewport?application=axeAPI",
            "nodes": []
        },
        {
            "id": "object-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "section508",
                "section508.22.a",
                "EN-301-549",
                "EN-9.1.1.1"
            ],
            "description": "Ensure <object> elements have alternative text",
            "help": "<object> elements must have alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/object-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "page-has-heading-one",
            "impact": null,
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
            "help": "Page should contain a level-one heading",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/page-has-heading-one?application=axeAPI",
            "nodes": []
        },
        {
            "id": "presentation-role-conflict",
            "impact": null,
            "tags": [
                "cat.aria",
                "best-practice",
                "ACT"
            ],
            "description": "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",
            "help": "Ensure elements marked as presentational are consistently ignored",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/presentation-role-conflict?application=axeAPI",
            "nodes": []
        },
        {
            "id": "region",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "best-practice"
            ],
            "description": "Ensure all page content is contained by landmarks",
            "help": "All page content should be contained by landmarks",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/region?application=axeAPI",
            "nodes": []
        },
        {
            "id": "role-img-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT7.a",
                "EN-301-549",
                "EN-9.1.1.1",
                "ACT"
            ],
            "description": "Ensure [role=\"img\"] elements have alternative text",
            "help": "[role=\"img\"] elements must have an alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/role-img-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "scope-attr-valid",
            "impact": null,
            "tags": [
                "cat.tables",
                "best-practice"
            ],
            "description": "Ensure the scope attribute is used correctly on tables",
            "help": "scope attribute should be used correctly",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/scope-attr-valid?application=axeAPI",
            "nodes": []
        },
        {
            "id": "select-name",
            "impact": null,
            "tags": [
                "cat.forms",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.n",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure select element has an accessible name",
            "help": "Select element must have an accessible name",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/select-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "server-side-image-map",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag211",
                "section508",
                "section508.22.f",
                "TTv5",
                "TT4.a",
                "EN-301-549",
                "EN-9.2.1.1"
            ],
            "description": "Ensure that server-side image maps are not used",
            "help": "Server-side image maps must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/server-side-image-map?application=axeAPI",
            "nodes": []
        },
        {
            "id": "skip-link",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "best-practice"
            ],
            "description": "Ensure all skip links have a focusable target",
            "help": "The skip-link target should exist and be focusable",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/skip-link?application=axeAPI",
            "nodes": []
        },
        {
            "id": "summary-name",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure summary elements have discernible text",
            "help": "Summary elements must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/summary-name?application=axeAPI",
            "nodes": []
        },
        {
            "id": "svg-img-alt",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag111",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT7.a",
                "EN-301-549",
                "EN-9.1.1.1",
                "ACT"
            ],
            "description": "Ensure <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",
            "help": "<svg> elements with an img role must have an alternative text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/svg-img-alt?application=axeAPI",
            "nodes": []
        },
        {
            "id": "tabindex",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "best-practice"
            ],
            "description": "Ensure tabindex attribute values are not greater than 0",
            "help": "Elements should not have tabindex greater than zero",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/tabindex?application=axeAPI",
            "nodes": []
        },
        {
            "id": "video-caption",
            "impact": null,
            "tags": [
                "cat.text-alternatives",
                "wcag2a",
                "wcag122",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT17.a",
                "EN-301-549",
                "EN-9.1.2.2"
            ],
            "description": "Ensure <video> elements have captions",
            "help": "<video> elements must have captions",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/video-caption?application=axeAPI",
            "nodes": []
        },
        {
            "id": "no-autoplay-audio",
            "impact": null,
            "tags": [
                "cat.time-and-media",
                "wcag2a",
                "wcag142",
                "TTv5",
                "TT2.a",
                "EN-301-549",
                "EN-9.1.4.2",
                "ACT"
            ],
            "description": "Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
            "help": "<video> or <audio> elements must not play automatically",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/no-autoplay-audio?application=axeAPI",
            "nodes": []
        }
    ],
    "passes": [
        {
            "id": "aria-allowed-attr",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure an element's role supports its ARIA attributes",
            "help": "Elements must only use supported ARIA attributes",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-allowed-attr?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div id=\"sq_135i\" class=\"sd-input sd-dropdown sd-dropdown--empty\" required=\"\" role=\"combobox\" aria-required=\"true\" aria-label=\"row 1, column Subject\" aria-invalid=\"false\" aria-expanded=\"false\" aria-controls=\"sq_135i_list\" data-rendered=\"r\">",
                    "target": [
                        "#sq_135i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Clearly explains the objectives\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Makes class interesting\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Uses class time effectively\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Knows the subject matter\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Recognizes and acknowledges effort\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Keeps me informed of my progress\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages and accepts different opinions\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Respects the students\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages cooperation and participation\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Communicates with my parents\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages me to think for myself\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_147i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column Is there anything about this class that frustrates you?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_147i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_148i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you like best about this class and/or teacher?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_148i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-allowed-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attributes are used correctly for the defined role"
                        }
                    ],
                    "none": [
                        {
                            "id": "aria-unsupported-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_149i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you wish this teacher would do differently that would improve this class?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_149i"
                    ]
                }
            ]
        },
        {
            "id": "aria-allowed-role",
            "impact": null,
            "tags": [
                "cat.aria",
                "best-practice"
            ],
            "description": "Ensure role attribute has an appropriate value for the element",
            "help": "ARIA role should be appropriate for the element",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-matrixdynamic__content sd-question__content\" role=\"presentation\">",
                    "target": [
                        ".sd-matrixdynamic__content"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div id=\"sq_135i\" class=\"sd-input sd-dropdown sd-dropdown--empty\" required=\"\" role=\"combobox\" aria-required=\"true\" aria-label=\"row 1, column Subject\" aria-invalid=\"false\" aria-expanded=\"false\" aria-controls=\"sq_135i_list\" data-rendered=\"r\">",
                    "target": [
                        "#sq_135i"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<svg class=\"sv-svg-icon sd-dropdown_clean-button-svg\" role=\"presentation\"><use xlink:href=\"#icon-cancel-24x24\"></use><title>Clear</title></svg>",
                    "target": [
                        ".sd-dropdown_clean-button-svg"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<svg class=\"sv-svg-icon sd-dropdown_chevron-button-svg\" role=\"presentation\"><use xlink:href=\"#icon-chevrondown-24x24\"></use></svg>",
                    "target": [
                        ".sd-dropdown_chevron-button-svg"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Clearly explains the objectives\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Makes class interesting\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Uses class time effectively\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Knows the subject matter\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Recognizes and acknowledges effort\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Keeps me informed of my progress\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages and accepts different opinions\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Respects the students\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages cooperation and participation\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Communicates with my parents\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages me to think for myself\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-allowed-role",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is allowed for given element"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                }
            ]
        },
        {
            "id": "aria-conditional-attr",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure ARIA attributes are used as described in the specification of the element's role",
            "help": "ARIA attributes must be used as specified for the element's role",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-conditional-attr?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<div id=\"sq_135i\" class=\"sd-input sd-dropdown sd-dropdown--empty\" required=\"\" role=\"combobox\" aria-required=\"true\" aria-label=\"row 1, column Subject\" aria-invalid=\"false\" aria-expanded=\"false\" aria-controls=\"sq_135i_list\" data-rendered=\"r\">",
                    "target": [
                        "#sq_135i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Clearly explains the objectives\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Makes class interesting\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Uses class time effectively\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Knows the subject matter\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Recognizes and acknowledges effort\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Keeps me informed of my progress\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages and accepts different opinions\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Respects the students\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages cooperation and participation\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Communicates with my parents\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages me to think for myself\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_147i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column Is there anything about this class that frustrates you?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_147i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_148i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you like best about this class and/or teacher?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_148i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-conditional-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_149i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you wish this teacher would do differently that would improve this class?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_149i"
                    ]
                }
            ]
        },
        {
            "id": "aria-deprecated-role",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure elements do not use deprecated roles",
            "help": "Deprecated ARIA roles must not be used",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-deprecated-role?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-matrixdynamic__content sd-question__content\" role=\"presentation\">",
                    "target": [
                        ".sd-matrixdynamic__content"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div id=\"sq_135i\" class=\"sd-input sd-dropdown sd-dropdown--empty\" required=\"\" role=\"combobox\" aria-required=\"true\" aria-label=\"row 1, column Subject\" aria-invalid=\"false\" aria-expanded=\"false\" aria-controls=\"sq_135i_list\" data-rendered=\"r\">",
                    "target": [
                        "#sq_135i"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Clearly explains the objectives\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Makes class interesting\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Uses class time effectively\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Knows the subject matter\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Recognizes and acknowledges effort\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Keeps me informed of my progress\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages and accepts different opinions\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Respects the students\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages cooperation and participation\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Communicates with my parents\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages me to think for myself\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "deprecatedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "ARIA role is not deprecated"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                }
            ]
        },
        {
            "id": "aria-hidden-focus",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure aria-hidden elements are not focusable nor contain focusable elements",
            "help": "ARIA hidden element must not be focusable or contain focusable elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-hidden-focus?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [
                        {
                            "id": "focusable-modal-open",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "No focusable elements while a modal is open"
                        },
                        {
                            "id": "focusable-disabled",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "No focusable elements contained within element"
                        },
                        {
                            "id": "focusable-not-tabbable",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "No focusable elements contained within element"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-dropdown_clean-button\" aria-hidden=\"true\" style=\"display: none;\"><svg class=\"sv-svg-icon sd-dropdown_clean-button-svg\" role=\"presentation\"><use xlink:href=\"#icon-cancel-24x24\"></use><title>Clear</title></svg></div>",
                    "target": [
                        ".sd-dropdown_clean-button"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "focusable-modal-open",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "No focusable elements while a modal is open"
                        },
                        {
                            "id": "focusable-disabled",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "No focusable elements contained within element"
                        },
                        {
                            "id": "focusable-not-tabbable",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "No focusable elements contained within element"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-dropdown_chevron-button\" aria-hidden=\"true\"><svg class=\"sv-svg-icon sd-dropdown_chevron-button-svg\" role=\"presentation\"><use xlink:href=\"#icon-chevrondown-24x24\"></use></svg></div>",
                    "target": [
                        ".sd-dropdown_chevron-button"
                    ]
                }
            ]
        },
        {
            "id": "aria-prohibited-attr",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure ARIA attributes are not prohibited for an element's role",
            "help": "Elements must only use permitted ARIA attributes",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<div id=\"sq_135i\" class=\"sd-input sd-dropdown sd-dropdown--empty\" required=\"\" role=\"combobox\" aria-required=\"true\" aria-label=\"row 1, column Subject\" aria-invalid=\"false\" aria-expanded=\"false\" aria-controls=\"sq_135i_list\" data-rendered=\"r\">",
                    "target": [
                        "#sq_135i"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Clearly explains the objectives\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Makes class interesting\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Uses class time effectively\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Knows the subject matter\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Recognizes and acknowledges effort\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Keeps me informed of my progress\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages and accepts different opinions\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Respects the students\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages cooperation and participation\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Communicates with my parents\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages me to think for myself\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_147i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column Is there anything about this class that frustrates you?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_147i"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_148i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you like best about this class and/or teacher?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_148i"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "aria-prohibited-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "ARIA attribute is allowed"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_149i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you wish this teacher would do differently that would improve this class?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_149i"
                    ]
                }
            ]
        },
        {
            "id": "aria-required-attr",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure elements with ARIA roles have all required ARIA attributes",
            "help": "Required ARIA attributes must be provided",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-required-attr?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-matrixdynamic__content sd-question__content\" role=\"presentation\">",
                    "target": [
                        ".sd-matrixdynamic__content"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div id=\"sq_135i\" class=\"sd-input sd-dropdown sd-dropdown--empty\" required=\"\" role=\"combobox\" aria-required=\"true\" aria-label=\"row 1, column Subject\" aria-invalid=\"false\" aria-expanded=\"false\" aria-controls=\"sq_135i_list\" data-rendered=\"r\">",
                    "target": [
                        "#sq_135i"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Clearly explains the objectives\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Makes class interesting\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Uses class time effectively\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Knows the subject matter\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Recognizes and acknowledges effort\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Keeps me informed of my progress\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages and accepts different opinions\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Respects the students\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages cooperation and participation\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Communicates with my parents\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages me to think for myself\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-required-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "All required ARIA attributes are present"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                }
            ]
        },
        {
            "id": "aria-roles",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure all elements with a role attribute use a valid value",
            "help": "ARIA roles used must conform to valid values",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-roles?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-matrixdynamic__content sd-question__content\" role=\"presentation\">",
                    "target": [
                        ".sd-matrixdynamic__content"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div id=\"sq_135i\" class=\"sd-input sd-dropdown sd-dropdown--empty\" required=\"\" role=\"combobox\" aria-required=\"true\" aria-label=\"row 1, column Subject\" aria-invalid=\"false\" aria-expanded=\"false\" aria-controls=\"sq_135i_list\" data-rendered=\"r\">",
                    "target": [
                        "#sq_135i"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Clearly explains the objectives\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Makes class interesting\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Uses class time effectively\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Knows the subject matter\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Recognizes and acknowledges effort\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Keeps me informed of my progress\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages and accepts different opinions\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Respects the students\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages cooperation and participation\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Communicates with my parents\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages me to think for myself\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "invalidrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is valid"
                        },
                        {
                            "id": "abstractrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Abstract roles are not used"
                        },
                        {
                            "id": "unsupportedrole",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA role is supported"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-item sd-radio sd-selectbase__item sd-selectbase__item--inline sd-item--allowhover sd-radio--allowhover\" role=\"presentation\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3)"
                    ]
                }
            ]
        },
        {
            "id": "aria-valid-attr-value",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure all ARIA attributes have valid values",
            "help": "ARIA attributes must conform to valid values",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<div id=\"sq_135i\" class=\"sd-input sd-dropdown sd-dropdown--empty\" required=\"\" role=\"combobox\" aria-required=\"true\" aria-label=\"row 1, column Subject\" aria-invalid=\"false\" aria-expanded=\"false\" aria-controls=\"sq_135i_list\" data-rendered=\"r\">",
                    "target": [
                        "#sq_135i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Clearly explains the objectives\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Makes class interesting\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Uses class time effectively\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Knows the subject matter\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Recognizes and acknowledges effort\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Keeps me informed of my progress\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages and accepts different opinions\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Respects the students\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages cooperation and participation\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Communicates with my parents\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages me to think for myself\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_147i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column Is there anything about this class that frustrates you?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_147i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_148i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you like best about this class and/or teacher?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_148i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "aria-valid-attr-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute values are valid"
                        },
                        {
                            "id": "aria-errormessage",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique"
                        },
                        {
                            "id": "aria-level",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-level values are valid"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_149i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you wish this teacher would do differently that would improve this class?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_149i"
                    ]
                }
            ]
        },
        {
            "id": "aria-valid-attr",
            "impact": null,
            "tags": [
                "cat.aria",
                "wcag2a",
                "wcag412",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure attributes that begin with aria- are valid ARIA attributes",
            "help": "ARIA attributes must conform to valid names",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div id=\"sq_135i\" class=\"sd-input sd-dropdown sd-dropdown--empty\" required=\"\" role=\"combobox\" aria-required=\"true\" aria-label=\"row 1, column Subject\" aria-invalid=\"false\" aria-expanded=\"false\" aria-controls=\"sq_135i_list\" data-rendered=\"r\">",
                    "target": [
                        "#sq_135i"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Clearly explains the objectives\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Makes class interesting\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Uses class time effectively\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Knows the subject matter\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Recognizes and acknowledges effort\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Keeps me informed of my progress\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages and accepts different opinions\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Respects the students\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages cooperation and participation\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Communicates with my parents\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<fieldset class=\"sd-selectbase sd-selectbase--row\" role=\"radiogroup\" aria-required=\"false\" aria-label=\"row 1, column Encourages me to think for myself\" aria-invalid=\"false\" data-rendered=\"r\">",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_147i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column Is there anything about this class that frustrates you?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_147i"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_148i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you like best about this class and/or teacher?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_148i"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-valid-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "ARIA attribute name is valid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_149i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you wish this teacher would do differently that would improve this class?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_149i"
                    ]
                }
            ]
        },
        {
            "id": "autocomplete-valid",
            "impact": null,
            "tags": [
                "cat.forms",
                "wcag21aa",
                "wcag135",
                "EN-301-549",
                "EN-9.1.3.5",
                "ACT"
            ],
            "description": "Ensure the autocomplete attribute is correct and suitable for the form field",
            "help": "autocomplete attribute must be used correctly",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/autocomplete-valid?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [
                        {
                            "id": "autocomplete-valid",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "the autocomplete attribute is correctly formatted"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                }
            ]
        },
        {
            "id": "avoid-inline-spacing",
            "impact": null,
            "tags": [
                "cat.structure",
                "wcag21aa",
                "wcag1412",
                "EN-301-549",
                "EN-9.1.4.12",
                "ACT"
            ],
            "description": "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
            "help": "Inline text spacing must be adjustable with custom stylesheets",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/avoid-inline-spacing?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<div id=\"demo-result\" class=\"v2-class---demo-result v2-class---demo-result--fit-content v2-class---demo-result--settings\" style=\"visibility: visible;\">",
                    "target": [
                        "#demo-result"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<div id=\"surveyElement\" style=\"position: absolute; top: 0; left: 0; right: 0; bottom: 0; min-height: 100%; height: 100%\">",
                    "target": [
                        "#surveyElement"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sd-root-modern sd-progress--pages sd-root-modern--full-container\" lang=\"en\" style=\"--sjs-general-backcolor: rgba(255, 255, 255, 1); --sjs-article-font-xx-large-textDecoration: none; --sjs-article-font-xx-large-fontWeight: 700; --sjs-article-font-xx-large-fontStyle: normal; --sjs-article-font-xx-large-fontStretch: normal; --sjs-article-font-xx-large-letterSpacing: 0; --sjs-article-font-xx-large-lineHeight: 64px; --sjs-article-font-xx-large-paragraphIndent: 0px; --sjs-article-font-xx-large-textCase: none; --sjs-article-font-x-large-textDecoration: none; --sjs-article-font-x-large-fontWeight: 700; --sjs-article-font-x-large-fontStyle: normal; --sjs-article-font-x-large-fontStretch: normal; --sjs-article-font-x-large-letterSpacing: 0; --sjs-article-font-x-large-lineHeight: 56px; --sjs-article-font-x-large-paragraphIndent: 0px; --sjs-article-font-x-large-textCase: none; --sjs-article-font-large-textDecoration: none; --sjs-article-font-large-fontWeight: 700; --sjs-article-font-large-fontStyle: normal; --sjs-article-font-large-fontStretch: normal; --sjs-article-font-large-letterSpacing: 0; --sjs-article-font-large-lineHeight: 40px; --sjs-article-font-large-paragraphIndent: 0px; --sjs-article-font-large-textCase: none; --sjs-article-font-medium-textDecoration: none; --sjs-article-font-medium-fontWeight: 700; --sjs-article-font-medium-fontStyle: normal; --sjs-article-font-medium-fontStretch: normal; --sjs-article-font-medium-letterSpacing: 0; --sjs-article-font-medium-lineHeight: 32px; --sjs-article-font-medium-paragraphIndent: 0px; --sjs-article-font-medium-textCase: none; --sjs-article-font-default-textDecoration: none; --sjs-article-font-default-fontWeight: 400; --sjs-article-font-default-fontStyle: normal; --sjs-article-font-default-fontStretch: normal; --sjs-article-font-default-letterSpacing: 0; --sjs-article-font-default-lineHeight: 28px; --sjs-article-font-default-paragraphIndent: 0px; --sjs-article-font-default-textCase: none;\">",
                    "target": [
                        ".sd-root-modern"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<div data-key=\"teacher-performance0\" style=\"flex: 1 1 100%; min-width: min(100%, 300px); max-width: 100%;\">",
                    "target": [
                        "div[data-key=\"teacher-performance0\"]"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--dropdown\" style=\"min-width: 300px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Subject</span><span>&nbsp;</span><span class=\"sd-question__required-text\">*</span> </th>",
                    "target": [
                        ".sd-table__cell--dropdown"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Clearly explains the objectives</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Makes class interesting</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(3)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Uses class time effectively</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(4)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Knows the subject matter</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(5)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Recognizes and acknowledges effort</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(6)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Keeps me informed of my progress</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(7)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Encourages and accepts different opinions</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(8)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Respects the students</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(9)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Encourages cooperation and participation</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(10)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Communicates with my parents</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(11)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Encourages me to think for myself</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(12)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--comment\" style=\"min-width: 250px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Is there anything about this class that frustrates you?</span> </th>",
                    "target": [
                        ".sd-table__cell--comment:nth-child(13)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--comment\" style=\"min-width: 250px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">What do you like best about this class and/or teacher?</span> </th>",
                    "target": [
                        ".sd-table__cell--comment:nth-child(14)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--comment\" style=\"min-width: 250px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">What do you wish this teacher would do differently that would improve this class?</span> </th>",
                    "target": [
                        ".sd-table__cell--comment:nth-child(15)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Subject\" data-rendered=\"r\" style=\"min-width: 300px;\">",
                    "target": [
                        "td[title=\"Subject\"]"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Clearly explains the objectives\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td:nth-child(2)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Makes class interesting\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td[title=\"Makes class interesting\"]"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Uses class time effectively\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td[title=\"Uses class time effectively\"]"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Knows the subject matter\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td[title=\"Knows the subject matter\"]"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Recognizes and acknowledges effort\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td:nth-child(6)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Keeps me informed of my progress\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td:nth-child(7)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Encourages and accepts different opinions\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td:nth-child(8)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Respects the students\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td[title=\"Respects the students\"]"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Encourages cooperation and participation\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td:nth-child(10)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Communicates with my parents\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td[title=\"Communicates with my parents\"]"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Encourages me to think for myself\" data-rendered=\"r\" style=\"min-width: 130px;\">",
                    "target": [
                        "td:nth-child(12)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"Is there anything about this class that frustrates you?\" data-rendered=\"r\" style=\"min-width: 250px;\">",
                    "target": [
                        "td:nth-child(13)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_147i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column Is there anything about this class that frustrates you?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_147i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"What do you like best about this class and/or teacher?\" data-rendered=\"r\" style=\"min-width: 250px;\">",
                    "target": [
                        "td:nth-child(14)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_148i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you like best about this class and/or teacher?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_148i"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<td class=\"sd-table__cell\" colspan=\"1\" title=\"What do you wish this teacher would do differently that would improve this class?\" data-rendered=\"r\" style=\"min-width: 250px;\">",
                    "target": [
                        "td:nth-child(15)"
                    ]
                },
                {
                    "any": [],
                    "all": [
                        {
                            "id": "important-letter-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Letter-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-word-spacing",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "word-spacing in the style attribute is not set to !important, or meets the minimum"
                        },
                        {
                            "id": "important-line-height",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "line-height in the style attribute is not set to !important, or meets the minimum"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_149i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you wish this teacher would do differently that would improve this class?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_149i"
                    ]
                }
            ]
        },
        {
            "id": "button-name",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure buttons have discernible text",
            "help": "Buttons must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/button-name?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "button-has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Element has inner text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<button class=\"sd-action sd-matrixdynamic__btn sd-matrixdynamic__add-btn\" type=\"button\"><span class=\"sv-string-viewer\">Add Subject</span><span class=\"sd-hidden\"></span></button>",
                    "target": [
                        ".sd-action"
                    ]
                }
            ]
        },
        {
            "id": "color-contrast",
            "impact": "serious",
            "tags": [
                "cat.color",
                "wcag2aa",
                "wcag143",
                "TTv5",
                "TT13.c",
                "EN-301-549",
                "EN-9.1.4.3",
                "ACT"
            ],
            "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
            "help": "Elements must meet minimum color contrast ratio thresholds",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#505050",
                                "bgColor": "#fff4e7",
                                "contrastRatio": 7.42,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 7.42"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<p class=\"v2-class---paragraph\">",
                    "target": [
                        ".v2-class---demo-content__description > .v2-class---paragraph"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#505050",
                                "bgColor": "#fff4e7",
                                "contrastRatio": 7.42,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 7.42"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<a id=\"content-docs-readmore\" onclick=\"goTo('/form-library/examples/dynamic-matrix-add-new-rows/documentation')\" class=\"v2-class---paragraph-link\">Read&nbsp;more...</a>",
                    "target": [
                        "#content-docs-readmore"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Teacher evaluation</span>",
                    "target": [
                        "#sq_100_ariaTitle > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Subject</span>",
                    "target": [
                        ".sd-table__cell--dropdown > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Clearly explains the objectives</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(2) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Makes class interesting</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(3) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Uses class time effectively</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(4) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Knows the subject matter</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(5) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Recognizes and acknowledges effort</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(6) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Keeps me informed of my progress</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(7) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Encourages and accepts different opinions</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(8) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Respects the students</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(9) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Encourages cooperation and participation</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(10) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Communicates with my parents</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(11) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Encourages me to think for myself</span>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(12) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Is there anything about this class that frustrates you?</span>",
                    "target": [
                        ".sd-table__cell--comment:nth-child(13) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">What do you like best about this class and/or teacher?</span>",
                    "target": [
                        ".sd-table__cell--comment:nth-child(14) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">What do you wish this teacher would do differently that would improve this class?</span>",
                    "target": [
                        ".sd-table__cell--comment:nth-child(15) > .sv-string-viewer--multiline.sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#161616",
                                "bgColor": "#f9f9f9",
                                "contrastRatio": 17.18,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.18"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">Yes</span>",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">No</span>",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#171717",
                                "bgColor": "#ffffff",
                                "contrastRatio": 17.92,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.92"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<span class=\"sv-string-viewer\">I don't know</span>",
                    "target": [
                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label > .sd-item__control-label > .sv-string-viewer"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#161616",
                                "bgColor": "#f9f9f9",
                                "contrastRatio": 17.18,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.18"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_147i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column Is there anything about this class that frustrates you?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_147i"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#161616",
                                "bgColor": "#f9f9f9",
                                "contrastRatio": 17.18,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.18"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_148i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you like best about this class and/or teacher?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_148i"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#161616",
                                "bgColor": "#f9f9f9",
                                "contrastRatio": 17.18,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element has sufficient color contrast of 17.18"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<textarea id=\"sq_149i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you wish this teacher would do differently that would improve this class?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_149i"
                    ]
                }
            ]
        },
        {
            "id": "empty-heading",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "best-practice"
            ],
            "description": "Ensure headings have discernible text",
            "help": "Headings should not be empty",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/empty-heading?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<h5 class=\"sd-title sd-element__title sd-question__title\" id=\"sq_100_ariaTitle\"><span class=\"sv-string-viewer sv-string-viewer--multiline\">Teacher evaluation</span></h5>",
                    "target": [
                        "#sq_100_ariaTitle"
                    ]
                }
            ]
        },
        {
            "id": "empty-table-header",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "best-practice"
            ],
            "description": "Ensure table headers have discernible text",
            "help": "Table header text should not be empty",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/empty-table-header?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--dropdown\" style=\"min-width: 300px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Subject</span><span>&nbsp;</span><span class=\"sd-question__required-text\">*</span> </th>",
                    "target": [
                        ".sd-table__cell--dropdown"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Clearly explains the objectives</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(2)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Makes class interesting</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(3)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Uses class time effectively</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(4)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Knows the subject matter</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(5)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Recognizes and acknowledges effort</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(6)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Keeps me informed of my progress</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(7)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Encourages and accepts different opinions</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(8)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Respects the students</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(9)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Encourages cooperation and participation</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(10)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Communicates with my parents</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(11)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--radiogroup\" style=\"min-width: 130px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Encourages me to think for myself</span> </th>",
                    "target": [
                        ".sd-table__cell--radiogroup:nth-child(12)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--comment\" style=\"min-width: 250px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">Is there anything about this class that frustrates you?</span> </th>",
                    "target": [
                        ".sd-table__cell--comment:nth-child(13)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--comment\" style=\"min-width: 250px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">What do you like best about this class and/or teacher?</span> </th>",
                    "target": [
                        ".sd-table__cell--comment:nth-child(14)"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "has-visible-text",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Element has text that is visible to screen readers"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<th class=\"sd-table__cell sd-table__cell--header sd-table__cell--column-title sd-table__cell--comment\" style=\"min-width: 250px;\"> <span class=\"sv-string-viewer sv-string-viewer--multiline\">What do you wish this teacher would do differently that would improve this class?</span> </th>",
                    "target": [
                        ".sd-table__cell--comment:nth-child(15)"
                    ]
                }
            ]
        },
        {
            "id": "form-field-multiple-labels",
            "impact": null,
            "tags": [
                "cat.forms",
                "wcag2a",
                "wcag332",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.3.3.2"
            ],
            "description": "Ensure form field does not have multiple label elements",
            "help": "Form field must not have multiple label elements",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/form-field-multiple-labels?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_0\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"1\">",
                    "target": [
                        "#sq_136i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_1\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"-1\">",
                    "target": [
                        "#sq_136i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_2\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"0\">",
                    "target": [
                        "#sq_136i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_0\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"1\">",
                    "target": [
                        "#sq_137i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_1\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"-1\">",
                    "target": [
                        "#sq_137i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_2\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"0\">",
                    "target": [
                        "#sq_137i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_0\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"1\">",
                    "target": [
                        "#sq_138i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_1\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"-1\">",
                    "target": [
                        "#sq_138i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_2\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"0\">",
                    "target": [
                        "#sq_138i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_0\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"1\">",
                    "target": [
                        "#sq_139i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_1\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"-1\">",
                    "target": [
                        "#sq_139i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_2\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"0\">",
                    "target": [
                        "#sq_139i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_0\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"1\">",
                    "target": [
                        "#sq_140i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_1\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"-1\">",
                    "target": [
                        "#sq_140i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_2\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"0\">",
                    "target": [
                        "#sq_140i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_0\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"1\">",
                    "target": [
                        "#sq_141i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_1\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"-1\">",
                    "target": [
                        "#sq_141i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_2\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"0\">",
                    "target": [
                        "#sq_141i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_0\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"1\">",
                    "target": [
                        "#sq_142i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_1\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"-1\">",
                    "target": [
                        "#sq_142i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_2\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"0\">",
                    "target": [
                        "#sq_142i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_0\" type=\"radio\" name=\"respects-students_sq_143\" value=\"1\">",
                    "target": [
                        "#sq_143i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_1\" type=\"radio\" name=\"respects-students_sq_143\" value=\"-1\">",
                    "target": [
                        "#sq_143i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_2\" type=\"radio\" name=\"respects-students_sq_143\" value=\"0\">",
                    "target": [
                        "#sq_143i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_0\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"1\">",
                    "target": [
                        "#sq_144i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_1\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"-1\">",
                    "target": [
                        "#sq_144i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_2\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"0\">",
                    "target": [
                        "#sq_144i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_0\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"1\">",
                    "target": [
                        "#sq_145i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_1\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"-1\">",
                    "target": [
                        "#sq_145i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_2\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"0\">",
                    "target": [
                        "#sq_145i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_0\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"1\">",
                    "target": [
                        "#sq_146i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_1\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"-1\">",
                    "target": [
                        "#sq_146i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_2\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"0\">",
                    "target": [
                        "#sq_146i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_147i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column Is there anything about this class that frustrates you?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_147i"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_148i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you like best about this class and/or teacher?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_148i"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "multiple-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Form field does not have multiple label elements"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_149i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you wish this teacher would do differently that would improve this class?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_149i"
                    ]
                }
            ]
        },
        {
            "id": "input-button-name",
            "impact": null,
            "tags": [
                "cat.name-role-value",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.a",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure input buttons have discernible text",
            "help": "Input buttons must have discernible text",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/input-button-name?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "non-empty-value",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Element has a non-empty value attribute"
                        },
                        {
                            "id": "non-empty-title",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Element has a title attribute"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-btn sd-btn--action sd-navigation__complete-btn\" type=\"button\" title=\"Complete\" value=\"Complete\">",
                    "target": [
                        ".sd-btn"
                    ]
                }
            ]
        },
        {
            "id": "label-title-only",
            "impact": null,
            "tags": [
                "cat.forms",
                "best-practice"
            ],
            "description": "Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
            "help": "Form elements should have a visible label",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/label-title-only?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_0\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"1\">",
                    "target": [
                        "#sq_136i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_1\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"-1\">",
                    "target": [
                        "#sq_136i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_2\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"0\">",
                    "target": [
                        "#sq_136i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_0\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"1\">",
                    "target": [
                        "#sq_137i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_1\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"-1\">",
                    "target": [
                        "#sq_137i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_2\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"0\">",
                    "target": [
                        "#sq_137i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_0\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"1\">",
                    "target": [
                        "#sq_138i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_1\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"-1\">",
                    "target": [
                        "#sq_138i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_2\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"0\">",
                    "target": [
                        "#sq_138i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_0\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"1\">",
                    "target": [
                        "#sq_139i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_1\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"-1\">",
                    "target": [
                        "#sq_139i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_2\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"0\">",
                    "target": [
                        "#sq_139i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_0\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"1\">",
                    "target": [
                        "#sq_140i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_1\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"-1\">",
                    "target": [
                        "#sq_140i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_2\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"0\">",
                    "target": [
                        "#sq_140i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_0\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"1\">",
                    "target": [
                        "#sq_141i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_1\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"-1\">",
                    "target": [
                        "#sq_141i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_2\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"0\">",
                    "target": [
                        "#sq_141i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_0\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"1\">",
                    "target": [
                        "#sq_142i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_1\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"-1\">",
                    "target": [
                        "#sq_142i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_2\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"0\">",
                    "target": [
                        "#sq_142i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_0\" type=\"radio\" name=\"respects-students_sq_143\" value=\"1\">",
                    "target": [
                        "#sq_143i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_1\" type=\"radio\" name=\"respects-students_sq_143\" value=\"-1\">",
                    "target": [
                        "#sq_143i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_2\" type=\"radio\" name=\"respects-students_sq_143\" value=\"0\">",
                    "target": [
                        "#sq_143i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_0\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"1\">",
                    "target": [
                        "#sq_144i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_1\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"-1\">",
                    "target": [
                        "#sq_144i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_2\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"0\">",
                    "target": [
                        "#sq_144i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_0\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"1\">",
                    "target": [
                        "#sq_145i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_1\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"-1\">",
                    "target": [
                        "#sq_145i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_2\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"0\">",
                    "target": [
                        "#sq_145i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_0\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"1\">",
                    "target": [
                        "#sq_146i_0"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_1\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"-1\">",
                    "target": [
                        "#sq_146i_1"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_2\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"0\">",
                    "target": [
                        "#sq_146i_2"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_147i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column Is there anything about this class that frustrates you?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_147i"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_148i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you like best about this class and/or teacher?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_148i"
                    ]
                },
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "title-only",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Form element does not solely use title attribute for its label"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_149i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you wish this teacher would do differently that would improve this class?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_149i"
                    ]
                }
            ]
        },
        {
            "id": "label",
            "impact": null,
            "tags": [
                "cat.forms",
                "wcag2a",
                "wcag412",
                "section508",
                "section508.22.n",
                "TTv5",
                "TT5.c",
                "EN-301-549",
                "EN-9.4.1.2",
                "ACT"
            ],
            "description": "Ensure every form element has a label",
            "help": "Form elements must have labels",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/label?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "aria-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-label attribute exists and is not empty"
                        },
                        {
                            "id": "non-empty-placeholder",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Element has a placeholder attribute"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input type=\"text\" autocomplete=\"off\" id=\"sq_135i_0\" class=\"sd-dropdown__filter-string-input\" role=\"combobox\" aria-expanded=\"false\" aria-label=\"row 1, column Subject\" aria-controls=\"sq_135i_list\" placeholder=\"Select...\" readonly=\"\" inputmode=\"text\">",
                    "target": [
                        "#sq_135i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_0\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"1\">",
                    "target": [
                        "#sq_136i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_1\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"-1\">",
                    "target": [
                        "#sq_136i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(2) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_2\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"0\">",
                    "target": [
                        "#sq_136i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_0\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"1\">",
                    "target": [
                        "#sq_137i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_1\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"-1\">",
                    "target": [
                        "#sq_137i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Makes class interesting\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_2\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"0\">",
                    "target": [
                        "#sq_137i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_0\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"1\">",
                    "target": [
                        "#sq_138i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_1\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"-1\">",
                    "target": [
                        "#sq_138i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Uses class time effectively\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_2\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"0\">",
                    "target": [
                        "#sq_138i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_0\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"1\">",
                    "target": [
                        "#sq_139i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_1\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"-1\">",
                    "target": [
                        "#sq_139i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Knows the subject matter\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_2\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"0\">",
                    "target": [
                        "#sq_139i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_0\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"1\">",
                    "target": [
                        "#sq_140i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_1\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"-1\">",
                    "target": [
                        "#sq_140i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(6) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_2\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"0\">",
                    "target": [
                        "#sq_140i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_0\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"1\">",
                    "target": [
                        "#sq_141i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_1\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"-1\">",
                    "target": [
                        "#sq_141i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(7) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_2\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"0\">",
                    "target": [
                        "#sq_141i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_0\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"1\">",
                    "target": [
                        "#sq_142i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_1\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"-1\">",
                    "target": [
                        "#sq_142i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(8) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_2\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"0\">",
                    "target": [
                        "#sq_142i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_0\" type=\"radio\" name=\"respects-students_sq_143\" value=\"1\">",
                    "target": [
                        "#sq_143i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_1\" type=\"radio\" name=\"respects-students_sq_143\" value=\"-1\">",
                    "target": [
                        "#sq_143i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Respects the students\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_2\" type=\"radio\" name=\"respects-students_sq_143\" value=\"0\">",
                    "target": [
                        "#sq_143i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_0\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"1\">",
                    "target": [
                        "#sq_144i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_1\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"-1\">",
                    "target": [
                        "#sq_144i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(10) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_2\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"0\">",
                    "target": [
                        "#sq_144i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_0\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"1\">",
                    "target": [
                        "#sq_145i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_1\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"-1\">",
                    "target": [
                        "#sq_145i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td[title=\"Communicates with my parents\"] > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_2\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"0\">",
                    "target": [
                        "#sq_145i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "Yes"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(1) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_0\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"1\">",
                    "target": [
                        "#sq_146i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "No"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(2) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_1\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"-1\">",
                    "target": [
                        "#sq_146i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "implicit-label",
                            "data": {
                                "implicitLabel": "I don't know"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<label class=\"sd-selectbase__label\">",
                                    "target": [
                                        "td:nth-child(12) > .sd-matrix__question-wrapper.sd-table__question-wrapper > fieldset > .sd-item.sd-radio.sd-selectbase__item:nth-child(3) > .sd-selectbase__label"
                                    ]
                                }
                            ],
                            "impact": "critical",
                            "message": "Element has an implicit (wrapped) <label>"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_2\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"0\">",
                    "target": [
                        "#sq_146i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-label attribute exists and is not empty"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_147i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column Is there anything about this class that frustrates you?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_147i"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-label attribute exists and is not empty"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_148i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you like best about this class and/or teacher?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_148i"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "aria-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "aria-label attribute exists and is not empty"
                        }
                    ],
                    "all": [],
                    "none": [
                        {
                            "id": "hidden-explicit-label",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "critical",
                            "message": "Form element has a visible explicit <label>"
                        }
                    ],
                    "impact": null,
                    "html": "<textarea id=\"sq_149i\" class=\"sd-input sd-comment\" rows=\"4\" cols=\"50\" placeholder=\"\" aria-required=\"false\" aria-label=\"row 1, column What do you wish this teacher would do differently that would improve this class?\" aria-invalid=\"false\" style=\"resize: both;\"></textarea>",
                    "target": [
                        "#sq_149i"
                    ]
                }
            ]
        },
        {
            "id": "nested-interactive",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "wcag2a",
                "wcag412",
                "TTv5",
                "TT6.a",
                "EN-301-549",
                "EN-9.4.1.2"
            ],
            "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
            "help": "Interactive controls must not be nested",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/nested-interactive?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_0\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"1\">",
                    "target": [
                        "#sq_136i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_1\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"-1\">",
                    "target": [
                        "#sq_136i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_136i_2\" type=\"radio\" name=\"explains-objectives_sq_136\" value=\"0\">",
                    "target": [
                        "#sq_136i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_0\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"1\">",
                    "target": [
                        "#sq_137i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_1\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"-1\">",
                    "target": [
                        "#sq_137i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_137i_2\" type=\"radio\" name=\"makes-class-interesting_sq_137\" value=\"0\">",
                    "target": [
                        "#sq_137i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_0\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"1\">",
                    "target": [
                        "#sq_138i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_1\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"-1\">",
                    "target": [
                        "#sq_138i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_138i_2\" type=\"radio\" name=\"uses-class-time-effectively_sq_138\" value=\"0\">",
                    "target": [
                        "#sq_138i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_0\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"1\">",
                    "target": [
                        "#sq_139i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_1\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"-1\">",
                    "target": [
                        "#sq_139i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_139i_2\" type=\"radio\" name=\"knows-subject-matter_sq_139\" value=\"0\">",
                    "target": [
                        "#sq_139i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_0\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"1\">",
                    "target": [
                        "#sq_140i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_1\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"-1\">",
                    "target": [
                        "#sq_140i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_140i_2\" type=\"radio\" name=\"recognizes-effort_sq_140\" value=\"0\">",
                    "target": [
                        "#sq_140i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_0\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"1\">",
                    "target": [
                        "#sq_141i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_1\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"-1\">",
                    "target": [
                        "#sq_141i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_141i_2\" type=\"radio\" name=\"informs-about-progress_sq_141\" value=\"0\">",
                    "target": [
                        "#sq_141i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_0\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"1\">",
                    "target": [
                        "#sq_142i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_1\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"-1\">",
                    "target": [
                        "#sq_142i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_142i_2\" type=\"radio\" name=\"encourages-different-opinions_sq_142\" value=\"0\">",
                    "target": [
                        "#sq_142i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_0\" type=\"radio\" name=\"respects-students_sq_143\" value=\"1\">",
                    "target": [
                        "#sq_143i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_1\" type=\"radio\" name=\"respects-students_sq_143\" value=\"-1\">",
                    "target": [
                        "#sq_143i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_143i_2\" type=\"radio\" name=\"respects-students_sq_143\" value=\"0\">",
                    "target": [
                        "#sq_143i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_0\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"1\">",
                    "target": [
                        "#sq_144i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_1\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"-1\">",
                    "target": [
                        "#sq_144i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_144i_2\" type=\"radio\" name=\"encourages-cooperation_sq_144\" value=\"0\">",
                    "target": [
                        "#sq_144i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_0\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"1\">",
                    "target": [
                        "#sq_145i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_1\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"-1\">",
                    "target": [
                        "#sq_145i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_145i_2\" type=\"radio\" name=\"communicates-with-parents_sq_145\" value=\"0\">",
                    "target": [
                        "#sq_145i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_0\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"1\">",
                    "target": [
                        "#sq_146i_0"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_1\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"-1\">",
                    "target": [
                        "#sq_146i_1"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-visuallyhidden sd-item__control sd-radio__control\" id=\"sq_146i_2\" type=\"radio\" name=\"encourages-self-thinking_sq_146\" value=\"0\">",
                    "target": [
                        "#sq_146i_2"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<button class=\"sd-action sd-matrixdynamic__btn sd-matrixdynamic__add-btn\" type=\"button\"><span class=\"sv-string-viewer\">Add Subject</span><span class=\"sd-hidden\"></span></button>",
                    "target": [
                        ".sd-action"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "no-focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element does not have focusable descendants"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<input class=\"sd-btn sd-btn--action sd-navigation__complete-btn\" type=\"button\" title=\"Complete\" value=\"Complete\">",
                    "target": [
                        ".sd-btn"
                    ]
                }
            ]
        },
        {
            "id": "scrollable-region-focusable",
            "impact": null,
            "tags": [
                "cat.keyboard",
                "wcag2a",
                "wcag211",
                "wcag213",
                "TTv5",
                "TT4.a",
                "EN-301-549",
                "EN-9.2.1.1",
                "EN-9.2.1.3"
            ],
            "description": "Ensure elements that have scrollable content are accessible by keyboard",
            "help": "Scrollable region must have keyboard access",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/scrollable-region-focusable?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element contains focusable elements"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div class=\"sv-scroll__scroller sv-drag-target-skipped\">",
                    "target": [
                        ".sv-scroll__scroller"
                    ]
                },
                {
                    "any": [
                        {
                            "id": "focusable-content",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Element contains focusable elements"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": null,
                    "html": "<div id=\"sq_100\" class=\"sd-element--with-frame sd-element sd-question sd-row__question sd-element--complex sd-question--complex sd-question--table sd-question--title-top\" data-name=\"teacher-performance\" data-rendered=\"r\">",
                    "target": [
                        "#sq_100"
                    ]
                }
            ]
        },
        {
            "id": "table-duplicate-name",
            "impact": null,
            "tags": [
                "cat.tables",
                "best-practice"
            ],
            "description": "Ensure the <caption> element does not contain the same text as the summary attribute",
            "help": "Tables should not have the same summary and caption",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/table-duplicate-name?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "same-caption-summary",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "minor",
                            "message": "Content of summary attribute and <caption> are not duplicated"
                        }
                    ],
                    "impact": null,
                    "html": "<table class=\"sd-table sd-matrixdynamic sd-table--columnsautowidth sd-table--has-footer\">",
                    "target": [
                        "table"
                    ]
                }
            ]
        },
        {
            "id": "td-headers-attr",
            "impact": null,
            "tags": [
                "cat.tables",
                "wcag2a",
                "wcag131",
                "section508",
                "section508.22.g",
                "TTv5",
                "TT14.b",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",
            "help": "Table cells that use the headers attribute must only refer to cells in the same table",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/td-headers-attr?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [
                        {
                            "id": "td-headers-attr",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "The headers attribute is exclusively used to refer to other cells in the table"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<table class=\"sd-table sd-matrixdynamic sd-table--columnsautowidth sd-table--has-footer\">",
                    "target": [
                        "table"
                    ]
                }
            ]
        },
        {
            "id": "th-has-data-cells",
            "impact": null,
            "tags": [
                "cat.tables",
                "wcag2a",
                "wcag131",
                "section508",
                "section508.22.g",
                "TTv5",
                "TT14.b",
                "EN-301-549",
                "EN-9.1.3.1"
            ],
            "description": "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
            "help": "Table headers in a data table must refer to data cells",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/th-has-data-cells?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [
                        {
                            "id": "th-has-data-cells",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "All table header cells refer to data cells"
                        }
                    ],
                    "none": [],
                    "impact": null,
                    "html": "<table class=\"sd-table sd-matrixdynamic sd-table--columnsautowidth sd-table--has-footer\">",
                    "target": [
                        "table"
                    ]
                }
            ]
        },
        {
            "id": "valid-lang",
            "impact": null,
            "tags": [
                "cat.language",
                "wcag2aa",
                "wcag312",
                "TTv5",
                "TT11.b",
                "EN-301-549",
                "EN-9.3.1.2",
                "ACT"
            ],
            "description": "Ensure lang attributes have valid values",
            "help": "lang attribute must have a valid value",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/valid-lang?application=axeAPI",
            "nodes": [
                {
                    "any": [],
                    "all": [],
                    "none": [
                        {
                            "id": "valid-lang",
                            "data": null,
                            "relatedNodes": [],
                            "impact": "serious",
                            "message": "Value of lang attribute is included in the list of valid languages"
                        }
                    ],
                    "impact": null,
                    "html": "<div class=\"sd-root-modern sd-progress--pages sd-root-modern--full-container\" lang=\"en\" style=\"--sjs-general-backcolor: rgba(255, 255, 255, 1); --sjs-special-yellow-forecolor: rgba(255, 255, 255, 1); --sjs-article-font-xx-large-textDecoration: none; --sjs-article-font-xx-large-fontWeight: 700; --sjs-article-font-xx-large-fontStyle: normal; --sjs-article-font-xx-large-fontStretch: normal; --sjs-article-font-xx-large-letterSpacing: 0; --sjs-article-font-xx-large-lineHeight: 64px; --sjs-article-font-xx-large-paragraphIndent: 0px; --sjs-article-font-xx-large-textCase: none; --sjs-article-font-x-large-textDecoration: none; --sjs-article-font-x-large-fontWeight: 700; --sjs-article-font-x-large-fontStyle: normal; --sjs-article-font-x-large-fontStretch: normal; --sjs-article-font-x-large-letterSpacing: 0; --sjs-article-font-x-large-lineHeight: 56px; --sjs-article-font-x-large-paragraphIndent: 0px; --sjs-article-font-x-large-textCase: none; --sjs-article-font-large-textDecoration: none; --sjs-article-font-large-fontWeight: 700; --sjs-article-font-large-fontStyle: normal; --sjs-article-font-large-fontStretch: normal; --sjs-article-font-large-letterSpacing: 0; --sjs-article-font-large-lineHeight: 40px; --sjs-article-font-large-paragraphIndent: 0px; --sjs-article-font-large-textCase: none; --sjs-article-font-medium-textDecoration: none; --sjs-article-font-medium-fontWeight: 700; --sjs-article-font-medium-fontStyle: normal; --sjs-article-font-medium-fontStretch: normal; --sjs-article-font-medium-letterSpacing: 0; --sjs-article-font-medium-lineHeight: 32px; --sjs-article-font-medium-paragraphIndent: 0px; --sjs-article-font-medium-textCase: none; --sjs-article-font-default-textDecoration: none; --sjs-article-font-default-fontWeight: 400; --sjs-article-font-default-fontStyle: normal; --sjs-article-font-default-fontStretch: normal; --sjs-article-font-default-letterSpacing: 0; --sjs-article-font-default-lineHeight: 28px; --sjs-article-font-default-paragraphIndent: 0px; --sjs-article-font-default-textCase: none;\">",
                    "target": [
                        ".sd-root-modern"
                    ]
                }
            ]
        }
    ],
    "incomplete": [],
    "violations": [
        {
            "id": "color-contrast",
            "impact": "serious",
            "tags": [
                "cat.color",
                "wcag2aa",
                "wcag143",
                "TTv5",
                "TT13.c",
                "EN-301-549",
                "EN-9.1.4.3",
                "ACT"
            ],
            "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
            "help": "Elements must meet minimum color contrast ratio thresholds",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#8c8c8c",
                                "bgColor": "#ffffff",
                                "contrastRatio": 3.36,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "messageKey": null,
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<div id=\"sq_100\" class=\"sd-element--with-frame sd-element sd-question sd-row__question sd-element--complex sd-question--complex sd-question--table sd-question--title-top\" data-name=\"teacher-performance\" data-rendered=\"r\">",
                                    "target": [
                                        "#sq_100"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Element has insufficient color contrast of 3.36 (foreground color: #8c8c8c, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": "serious",
                    "html": "<span class=\"sv-string-viewer sv-string-viewer--multiline\">Select a subject and indicate whether the following statements are true for the subject teacher</span>",
                    "target": [
                        "#sq_100_ariaDescription > .sv-string-viewer--multiline.sv-string-viewer"
                    ],
                    "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 3.36 (foreground color: #8c8c8c, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1"
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#19b394",
                                "bgColor": "#ffffff",
                                "contrastRatio": 2.65,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "messageKey": null,
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<div id=\"sq_100\" class=\"sd-element--with-frame sd-element sd-question sd-row__question sd-element--complex sd-question--complex sd-question--table sd-question--title-top\" data-name=\"teacher-performance\" data-rendered=\"r\">",
                                    "target": [
                                        "#sq_100"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Element has insufficient color contrast of 2.65 (foreground color: #19b394, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": "serious",
                    "html": "<span class=\"sv-string-viewer\">Add Subject</span>",
                    "target": [
                        ".sd-action > .sv-string-viewer"
                    ],
                    "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.65 (foreground color: #19b394, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1"
                },
                {
                    "any": [
                        {
                            "id": "color-contrast",
                            "data": {
                                "fgColor": "#ffffff",
                                "bgColor": "#19b394",
                                "contrastRatio": 2.65,
                                "fontSize": "12.0pt (16px)",
                                "fontWeight": "normal",
                                "messageKey": null,
                                "expectedContrastRatio": "4.5:1"
                            },
                            "relatedNodes": [
                                {
                                    "html": "<input class=\"sd-btn sd-btn--action sd-navigation__complete-btn\" type=\"button\" title=\"Complete\" value=\"Complete\">",
                                    "target": [
                                        ".sd-btn"
                                    ]
                                }
                            ],
                            "impact": "serious",
                            "message": "Element has insufficient color contrast of 2.65 (foreground color: #ffffff, background color: #19b394, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": "serious",
                    "html": "<input class=\"sd-btn sd-btn--action sd-navigation__complete-btn\" type=\"button\" title=\"Complete\" value=\"Complete\">",
                    "target": [
                        ".sd-btn"
                    ],
                    "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.65 (foreground color: #ffffff, background color: #19b394, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1"
                }
            ]
        },
        {
            "id": "heading-order",
            "impact": "moderate",
            "tags": [
                "cat.semantics",
                "best-practice"
            ],
            "description": "Ensure the order of headings is semantically correct",
            "help": "Heading levels should only increase by one",
            "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/heading-order?application=axeAPI",
            "nodes": [
                {
                    "any": [
                        {
                            "id": "heading-order",
                            "data": {
                                "headingOrder": [
                                    {
                                        "ancestry": [
                                            "html > body > main:nth-child(15) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h1:nth-child(1)"
                                        ],
                                        "level": 1
                                    },
                                    {
                                        "ancestry": [
                                            "html > body > main:nth-child(15) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(1) > div > div:nth-child(2) > form > div:nth-child(2) > div > div > div > div:nth-child(1) > div > div > div > div:nth-child(1) > h5:nth-child(1)"
                                        ],
                                        "level": 5
                                    }
                                ]
                            },
                            "relatedNodes": [],
                            "impact": "moderate",
                            "message": "Heading order invalid"
                        }
                    ],
                    "all": [],
                    "none": [],
                    "impact": "moderate",
                    "html": "<h5 class=\"sd-title sd-element__title sd-question__title\" id=\"sq_100_ariaTitle\"><span class=\"sv-string-viewer sv-string-viewer--multiline\">Teacher evaluation</span></h5>",
                    "target": [
                        "#sq_100_ariaTitle"
                    ],
                    "failureSummary": "Fix any of the following:\n  Heading order invalid"
                }
            ]
        }
    ]
};