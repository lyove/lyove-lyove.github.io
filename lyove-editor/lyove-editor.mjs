var ei = Object.defineProperty;
var ri = (a, t, e) => t in a ? ei(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var H = (a, t, e) => (ri(a, typeof t != "symbol" ? t + "" : t, e), e), Qe = (a, t, e) => {
  if (!t.has(a))
    throw TypeError("Cannot " + e);
};
var l = (a, t, e) => (Qe(a, t, "read from private field"), e ? e.call(a) : t.get(a)), h = (a, t, e) => {
  if (t.has(a))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(a) : t.set(a, e);
}, b = (a, t, e, r) => (Qe(a, t, "write to private field"), r ? r.call(a, e) : t.set(a, e), e);
var m = (a, t, e) => (Qe(a, t, "access private method"), e);
const ii = Object.freeze({
  default: "defaultPlugins",
  min: "minPlugins",
  max: "maxPlugins"
}), u = Object.freeze({
  ALIGN: "align",
  AUDIO: "audio",
  BACKGROUND: "background",
  BLOCK: "block",
  BREAK: "break",
  CAPTION: "caption",
  COLOR: "color",
  CONTAINER: "container",
  FIGURE: "figure",
  FORMAT: "format",
  FONTSIZE: "fontSize",
  HEADING: "heading",
  HELP: "help",
  IFRAME: "iframe",
  IMAGE: "image",
  INDENT: "indent",
  LINEHEIGHT: "lineHeight",
  LIST: "list",
  LISTITEM: "listitem",
  MENUBAR: "menubar",
  PARAGRAPH: "paragraph",
  PREFORMAT: "preformat",
  QUOTE: "quote",
  RULE: "rule",
  SLOT: "slot",
  SUMMARY: "summary",
  TABLE: "table",
  TABLECELL: "tablecell",
  TABLEROW: "tablerow",
  TABLESECTION: "tablesection",
  TEXTAREA: "textarea",
  VIDEO: "video"
}), s = Object.freeze({
  A: "a",
  ABBR: "abbr",
  ALL: "*",
  AUDIO: "audio",
  B: "b",
  BLOCK: "app-block",
  BLOCKQUOTE: "blockquote",
  BR: "br",
  BUTTON: "button",
  CITE: "cite",
  CODE: "code",
  DATA: "data",
  DEL: "del",
  DETAILS: "details",
  DFN: "dfn",
  DIALOG: "editor-dialog",
  DIV: "div",
  DROPDOWN: "editor-dropdown",
  EDITOR: "lyove-editor",
  EM: "em",
  FIELDSET: "fieldset",
  FIGCAPTION: "figcaption",
  FIGURE: "figure",
  FOCUSBAR: "editor-focusbar",
  FORM: "form",
  FORMATBAR: "editor-formatbar",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  HR: "hr",
  I: "i",
  IFRAME: "iframe",
  IMG: "img",
  INPUT: "input",
  INS: "ins",
  KBD: "kbd",
  LABEL: "label",
  LEGEND: "legend",
  LI: "li",
  MARK: "mark",
  MENUBAR: "editor-menubar",
  OL: "ol",
  OPTION: "option",
  P: "p",
  PRE: "pre",
  Q: "q",
  TEXTAREA: "editor-textarea",
  S: "s",
  SAMP: "samp",
  SECTION: "section",
  SELECT: "select",
  SLOT: "slot",
  SMALL: "small",
  SPAN: "span",
  STRONG: "strong",
  SUB: "sub",
  SUMMARY: "summary",
  SUP: "sup",
  TABLE: "table",
  TBODY: "tbody",
  TD: "td",
  TFOOT: "tfoot",
  TH: "th",
  THEAD: "thead",
  TIME: "time",
  TOOLBAR: "editor-toolbar",
  TR: "tr",
  U: "u",
  UL: "ul",
  VAR: "var",
  VIDEO: "video"
}), d = Object.freeze({
  A: "a",
  B: "b",
  BACKSPACE: "Backspace",
  C: "c",
  D: "d",
  DEL: "Delete",
  DOWN: "ArrowDown",
  E: "e",
  END: "End",
  ENTER: "Enter",
  ESC: "Escape",
  F: "f",
  G: "g",
  H: "h",
  HOME: "Home",
  I: "i",
  J: "j",
  K: "k",
  L: "l",
  LEFT: "ArrowLeft",
  M: "m",
  N: "n",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  RIGHT: "ArrowRight",
  S: "s",
  SPACE: " ",
  T: "t",
  TAB: "Tab",
  U: "u",
  UP: "ArrowUp",
  V: "v",
  W: "w",
  X: "x",
  Y: "y",
  Z: "z"
}), kr = Object.freeze({
  FUNCTION: "function",
  STRING: "string",
  OBJECT: "object",
  ARRAY: "array",
  NUMBER: "number",
  BOOLEAN: "boolean",
  UNDEFINED: "undefined",
  NULL: "null"
}), k = Object.freeze({
  INVALID_ARGUMENT: "Invalid argument",
  MISSING_NAME: "Missing name",
  NOT_IMPLEMENTED: "Not implemented"
}), S = Object.freeze({
  CENTER: "center",
  LEFT: "left",
  NONE: "none",
  RIGHT: "right"
}), Xe = Object.freeze({
  LEFT: "left",
  RIGHT: "right"
}), I = Object.freeze({
  AFTERBEGIN: "afterbegin",
  AFTEREND: "afterend",
  BEFOREBEGIN: "beforebegin",
  BEFOREEND: "beforeend"
}), v = Object.freeze({
  FIRST: "first",
  LAST: "last",
  NEXT: "next",
  PREV: "prev"
});
function _(a, t, { alt: e = !1, ctrl: r = !1, shift: i = !1 } = {}) {
  return (Array.isArray(t) && t.includes(a.key) || a.key === t) && a.altKey === e && a.ctrlKey === r && a.shiftKey === i;
}
function Ge(a) {
  return typeof a === kr.UNDEFINED;
}
function $e(a) {
  return typeof a === kr.FUNCTION;
}
function x(a) {
  return a && typeof a === kr.STRING;
}
function We(a) {
  return Ge(a) || x(a);
}
function Mr(a) {
  return Ge(a) || Array.isArray(a) && a.length > 0;
}
function Cr(a) {
  return Ge(a) || a instanceof HTMLElement;
}
function oi(a = () => {
}, t = 0) {
  typeof a == "function" && setTimeout(a, t);
}
function rt() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    const t = Math.random() * 16 | 0;
    return (a == "x" ? t : t & 3 | 8).toString(16);
  });
}
var ft, wt, bt, kt, Me, Ce, yr;
class Rr {
  constructor(t, e) {
    h(this, Ce);
    h(this, ft, void 0);
    h(this, wt, void 0);
    h(this, bt, void 0);
    h(this, kt, void 0);
    h(this, Me, {
      alwaysRaised: "yes",
      dependent: "yes",
      height: "",
      location: "no",
      menubar: "no",
      minimizable: "no",
      modal: "yes",
      resizable: "yes",
      scrollbars: "yes",
      toolbar: "no",
      width: ""
    });
    if (!(t instanceof q) || !(e instanceof Document))
      throw new Error(k.INVALID_ARGUMENT);
    b(this, ft, t), b(this, wt, e), b(this, bt, this.document.defaultView), b(this, kt, this.document.documentElement);
  }
  get editor() {
    return l(this, ft);
  }
  get document() {
    return l(this, wt);
  }
  get window() {
    return l(this, bt);
  }
  get textarea() {
    return l(this, kt);
  }
  registerElement(t, e, r = void 0) {
    Ge(this.window.customElements.get(t)) && this.window.customElements.define(
      t,
      e,
      r ? { extends: r } : void 0
    );
  }
  createElement(t, { attributes: e = {}, html: r = "" } = {}) {
    const i = this.document.createElement(t);
    return i.innerHTML = r, Object.entries(e).forEach(([o, n]) => n && i.setAttribute(o, `${n}`)), i;
  }
  insert(t) {
    var r;
    if (!(t instanceof HTMLElement))
      throw new Error(k.INVALID_ARGUMENT);
    const e = this.getSelectedEditable();
    if (e instanceof HTMLSlotElement && this.editor.tags.allowed(e.parentElement, t))
      e.insertAdjacentElement(I.BEFOREBEGIN, t);
    else if (e)
      (r = this.closest(e, t)) == null || r.insertAdjacentElement(I.AFTEREND, t), e.hasAttribute("data-deletable") && !e.textContent.trim() && e.parentElement.removeChild(e);
    else if (this.editor.tags.allowed(this.editor.textarea, t))
      this.editor.textarea.appendChild(t);
    else
      throw new Error(k.INVALID_ARGUMENT);
  }
  insertText(t) {
    const e = this.getSelectedEditable();
    if (e) {
      const r = this.getRange();
      r.deleteContents(), r.insertNode(this.createText(t)), r.collapse(), e.normalize();
    }
  }
  format(t) {
    if (!(t instanceof HTMLElement))
      throw new Error(k.INVALID_ARGUMENT);
    const e = this.getRange(), r = this.getSelectedEditable();
    if (!e || e.collapsed || !e.toString().trim() || !r || !this.editor.tags.allowed(r, t))
      return;
    e.startContainer instanceof Text && e.startContainer.parentElement !== r && e.setStartBefore(e.startContainer.parentElement), e.endContainer instanceof Text && e.endContainer.parentElement !== r && e.setEndAfter(e.endContainer.parentElement);
    const i = e.toString(), o = Array.from(e.cloneContents().childNodes).every(
      (n) => n instanceof Text && !n.textContent.trim() || n instanceof HTMLElement && n.localName === t.localName
    );
    e.deleteContents(), o ? e.insertNode(this.createText(i)) : (t.textContent = i, e.insertNode(t)), r.normalize();
  }
  createText(t) {
    return this.document.createTextNode(t);
  }
  arbitrary(t) {
    return t === this.editor.textarea || (t == null ? void 0 : t.hasAttribute("data-arbitrary"));
  }
  contains(t) {
    if (!(t instanceof HTMLElement))
      throw new Error(k.INVALID_ARGUMENT);
    if (this.editor.textarea.contains(t))
      return !0;
    const e = t.closest(this.editor.textarea.localName);
    return e && !e.parentElement;
  }
  closest(t, e) {
    if (!(t instanceof HTMLElement) || !this.contains(t.parentElement))
      throw new Error(k.INVALID_ARGUMENT);
    let r = t, i = t.parentElement;
    do
      if (this.arbitrary(i) && this.editor.tags.allowed(i, e))
        return r;
    while ((r = i) && (i = i.parentElement) && this.contains(i));
  }
  wrap(t, e, r = {}) {
    let i;
    if (t instanceof HTMLElement) {
      if (t.parentElement.localName !== e && (i = this.closest(t, e))) {
        const o = this.createElement(e, r);
        i.insertAdjacentElement(I.AFTEREND, o), o.appendChild(t);
      }
    } else
      throw new Error(k.INVALID_ARGUMENT);
  }
  getActiveElement() {
    const t = this.document.activeElement;
    return t && this.contains(t) ? t : void 0;
  }
  getSelectedElement() {
    const t = this.getSelection(), e = t.anchorNode instanceof Text ? t.anchorNode.parentElement : t.anchorNode, r = t.focusNode instanceof Text ? t.focusNode.parentElement : t.focusNode;
    if (e instanceof HTMLElement && r instanceof HTMLElement && e === r && this.contains(e))
      return e;
  }
  getSelectedElementByName(t) {
    const e = this.getSelectedElement();
    return (e == null ? void 0 : e.localName) === t ? e : void 0;
  }
  getSelectedAttributesByName(t, e) {
    const r = this.getSelectedElementByName(t), i = {
      class: e,
      "data-command": e
    };
    return r && Array.from(r.attributes).forEach(
      (o) => i[o.nodeName] = o.nodeValue
    ), i;
  }
  getSelectedEditable() {
    const t = this.getSelection(), e = t.anchorNode instanceof Text ? t.anchorNode.parentElement : t.anchorNode, r = t.focusNode instanceof Text ? t.focusNode.parentElement : t.focusNode;
    if (e instanceof HTMLElement && r instanceof HTMLElement) {
      const i = e.closest("[contenteditable=true]"), o = r.closest("[contenteditable=true]");
      if (i instanceof HTMLElement && i === o && this.contains(i))
        return i;
    }
  }
  getSelection() {
    return this.window.getSelection();
  }
  getRange() {
    const t = this.getSelection();
    return t.rangeCount > 0 ? t.getRangeAt(0) : void 0;
  }
  setRange(t) {
    const e = this.getSelection();
    e.removeAllRanges(), e.addRange(t);
  }
  selectContents(t) {
    if (!(t instanceof HTMLElement))
      throw new Error(k.INVALID_ARGUMENT);
    const e = this.document.createRange();
    e.selectNodeContents(t), this.setRange(e);
  }
  focusEnd(t) {
    if (!(t instanceof HTMLElement))
      throw new Error(k.INVALID_ARGUMENT);
    t.focus();
    const e = this.document.createRange();
    e.selectNodeContents(t), e.collapse(), this.setRange(e);
  }
  delete(t) {
    if (!(t instanceof HTMLElement))
      throw new Error(k.INVALID_ARGUMENT);
    const e = t.previousElementSibling, r = t.nextElementSibling;
    t.parentElement.removeChild(t), e instanceof HTMLElement && e.hasAttribute("data-focusable") ? this.focusEnd(e) : r instanceof HTMLElement && r.hasAttribute("data-focusable") && r.focus();
  }
  sort(t, e) {
    if (!(t instanceof HTMLElement) || !Object.values(v).includes(e))
      throw new Error(k.INVALID_ARGUMENT);
    const r = t.parentElement, i = t.previousElementSibling, o = t.nextElementSibling, n = r.firstElementChild, c = r.lastElementChild, g = t === n, p = t === c;
    e === v.PREV && !g && i.hasAttribute("data-sortable") ? (i.insertAdjacentHTML(I.BEFOREBEGIN, t.outerHTML), r.removeChild(t)) : e === v.NEXT && !p && o.hasAttribute("data-sortable") ? (o.insertAdjacentHTML(I.AFTEREND, t.outerHTML), r.removeChild(t)) : (e === v.FIRST && !g || e === v.NEXT && p) && n.hasAttribute("data-sortable") ? (n.insertAdjacentHTML(I.BEFOREBEGIN, t.outerHTML), r.removeChild(t)) : (e === v.LAST && !p || e === v.PREV && g) && c.hasAttribute("data-sortable") && (c.insertAdjacentHTML(I.AFTEREND, t.outerHTML), r.removeChild(t));
  }
  open({ url: t, name: e, call: r, params: i = {} }) {
    if (!x(t) || !x(e) || !$e(r))
      throw new Error(k.INVALID_ARGUMENT);
    const o = this.createElement(s.A, { attributes: { href: t } }), n = new URL(o.href);
    Object.entries(i).forEach(([g, p]) => n.searchParams.set(g, `${p}`));
    const c = this.window.open(n.toString(), e, m(this, Ce, yr).call(this));
    this.window.addEventListener(
      "message",
      (g) => {
        g.origin === n.origin && g.source === c && (r(g.data), c.close());
      },
      !1
    );
  }
  getWidth() {
    return this.window.screen.width;
  }
  getHeight() {
    return this.window.screen.height;
  }
}
ft = new WeakMap(), wt = new WeakMap(), bt = new WeakMap(), kt = new WeakMap(), Me = new WeakMap(), Ce = new WeakSet(), yr = function() {
  const t = Object.assign(
    {},
    l(this, Me),
    { height: `${this.getHeight()}`, width: `${this.getWidth()}` },
    this.editor.config.browser
  );
  return Object.entries(t).filter(([, e]) => !!e).map(([e, r]) => `${e}=${r}`).join(",");
};
var st, nt, he, Ae, Dr;
class gt {
  constructor(t) {
    h(this, nt);
    h(this, Ae);
    h(this, st, void 0);
    if (!(t instanceof HTMLElement))
      throw new Error(k.INVALID_ARGUMENT);
    b(this, st, t), this.register(m(this, Ae, Dr).bind(this));
  }
  register(t, e = { childList: !0, subtree: !0, attributes: !0 }) {
    if (!$e(t))
      throw new Error(k.INVALID_ARGUMENT);
    new MutationObserver(t).observe(l(this, st), e);
  }
  dispatch(t, e = void 0, r = void 0) {
    if (!x(t) || !Cr(e) || !Cr(r))
      throw new Error(k.INVALID_ARGUMENT);
    l(this, st).dispatchEvent(
      new CustomEvent(t, { detail: { element: e, target: r } })
    );
  }
}
st = new WeakMap(), nt = new WeakSet(), he = function(t, e, r) {
  e instanceof HTMLElement && r instanceof HTMLElement && (this.dispatch(t, e, r), this.dispatch(`${t}${e.localName.replace("-", "")}`, e, r));
}, Ae = new WeakSet(), Dr = function(t) {
  t.forEach((e) => {
    e.addedNodes.forEach((r) => {
      r instanceof HTMLElement && (m(this, nt, he).call(this, "insert", r, e.target), Array.from(r.getElementsByTagName(s.ALL)).forEach(
        (i) => m(this, nt, he).call(this, "insert", i, e.target)
      ));
    }), e.removedNodes.forEach((r) => {
      r instanceof HTMLElement && m(this, nt, he).call(this, "delete", r, e.target);
    });
  });
};
var Et, Lt, Tt, xt, Mt, at, ue, Ct, Ye, dt, me;
class y {
  constructor(t, e, r) {
    h(this, at);
    h(this, Ct);
    h(this, dt);
    h(this, Et, void 0);
    h(this, Lt, void 0);
    h(this, Tt, void 0);
    h(this, xt, void 0);
    h(this, Mt, void 0);
    if (!(t instanceof q) || !x(e) || !We(r))
      throw new Error(k.INVALID_ARGUMENT);
    b(this, Et, t), b(this, Lt, e), b(this, Tt, r && this.editor.tags.get(r)), b(this, xt, this.editor.dialogs.get(e)), b(this, Mt, this.editor.dropdowns.get(e));
  }
  get editor() {
    return l(this, Et);
  }
  get name() {
    return l(this, Lt);
  }
  get tag() {
    return l(this, Tt);
  }
  get dialog() {
    return l(this, xt);
  }
  get dropdown() {
    return l(this, Mt);
  }
  execute(t, e) {
    var r, i;
    if (this.dialog) {
      this.editor.element.getElementsByTagName(s.DIALOG).length > 0 ? this.dialog.cleanup() : this.openDialog(t);
      return;
    }
    if (this.dropdown) {
      const o = this.editor.element.getElementsByTagName(s.DROPDOWN);
      if (o.length > 0) {
        const n = (i = (r = o == null ? void 0 : o[0]) == null ? void 0 : r.dataset) == null ? void 0 : i.command;
        if (this.dropdown.cleanup(), m(this, dt, me).call(this), n === t)
          return;
      }
      m(this, dt, me).call(this), this.openDropdown(t, e);
      return;
    }
    m(this, dt, me).call(this), this.insert(m(this, at, ue).call(this, t));
  }
  insert(t = {}) {
    if (!!this.tag)
      if (m(this, Ct, Ye).call(this, t), this.tag.group === u.FORMAT) {
        const e = this.editor.dom.getSelectedElementByName(this.tag.name);
        if (e) {
          const r = this.editor.dom.createText(e.textContent);
          e.parentElement.replaceChild(r, e);
        } else {
          const r = this.editor.dom.createElement(this.tag.name, {
            attributes: t
          });
          this.editor.dom.format(r);
        }
      } else
        this.editor.dom.insert(this.editor.dom.createElement(this.tag.name, { attributes: t }));
  }
  openDialog(t) {
    var e;
    (e = this.dialog) == null || e.open((r) => this.insert(r), m(this, at, ue).call(this));
  }
  openDropdown(t, e) {
    var r;
    (r = this.dropdown) == null || r.open(
      (i) => this.insert(i),
      m(this, at, ue).call(this, t),
      e
    );
  }
}
Et = new WeakMap(), Lt = new WeakMap(), Tt = new WeakMap(), xt = new WeakMap(), Mt = new WeakMap(), at = new WeakSet(), ue = function(t) {
  if (!this.tag)
    return {
      "data-command": t
    };
  const e = this.editor.dom.getSelectedAttributesByName(this.tag.name, t);
  return m(this, Ct, Ye).call(this, e), e;
}, Ct = new WeakSet(), Ye = function(t) {
  Object.keys(t).forEach(
    (e) => this.tag.attributes.includes(e) && t[e] || delete t[e]
  );
}, dt = new WeakSet(), me = function() {
  const t = document.getElementsByTagName(s.DROPDOWN);
  t.length > 0 && Array.from(t).forEach((e) => {
    e.classList.remove("dropdown-animate-in"), e.classList.add("dropdown-animate-out");
    const r = e.parentElement;
    if (r) {
      r == null || r.removeChild(e);
      const { command: i } = e.dataset, o = r.querySelector(`button[data-command=${i}]`), n = Array.from(o.children).find(
        (c) => c.className.indexOf("btn-arrow") > -1
      );
      n && (n.classList.remove("up"), n.classList.add("down"));
    }
  });
};
var z;
class si {
  constructor(t = []) {
    h(this, z, /* @__PURE__ */ new Map());
    t.forEach((e) => this.set(e));
  }
  get(t) {
    return l(this, z).get(t);
  }
  set(t) {
    if (!(t instanceof y))
      throw new Error(k.INVALID_ARGUMENT);
    l(this, z).set(t.name, t);
  }
  find(t) {
    return Array.from(l(this, z).values()).find((e) => {
      var r;
      return ((r = e.tag) == null ? void 0 : r.name) === t;
    });
  }
  execute(t, e) {
    var r;
    (r = this.get(t)) == null || r.execute(t, e);
  }
  freeze() {
    l(this, z).forEach((t) => Object.freeze(t)), Object.freeze(l(this, z)), Object.freeze(this);
  }
}
z = new WeakMap();
var At;
class it {
  constructor(t) {
    h(this, At, void 0);
    if (!(t instanceof q))
      throw new Error(k.INVALID_ARGUMENT);
    b(this, At, t);
  }
  get editor() {
    return l(this, At);
  }
  filter(t) {
    throw new Error(k.NOT_IMPLEMENTED);
  }
}
At = new WeakMap();
var Z;
class ni {
  constructor() {
    h(this, Z, /* @__PURE__ */ new Set());
  }
  add(t) {
    if (!(t instanceof it))
      throw new Error(k.INVALID_ARGUMENT);
    l(this, Z).add(t);
  }
  filter(t) {
    if (!(t instanceof HTMLElement))
      throw new Error(k.INVALID_ARGUMENT);
    l(this, Z).forEach((e) => {
      t.normalize(), e.filter(t);
    });
  }
  freeze() {
    l(this, Z).forEach((t) => Object.freeze(t)), Object.freeze(l(this, Z)), Object.freeze(this);
  }
}
Z = new WeakMap();
class Or {
  constructor({ name: t, group: e, command: r, ...i } = {}) {
    H(this, "name");
    H(this, "group");
    H(this, "children");
    H(this, "attributes");
    H(this, "alignable");
    H(this, "arbitrary");
    H(this, "deletable");
    H(this, "editable");
    H(this, "empty");
    H(this, "focusable");
    H(this, "navigable");
    H(this, "slotable");
    H(this, "sortable");
    H(this, "enter");
    if (!x(t) || !x(e) || !Mr(i.children) || !Mr(i.attributes) || !We(i.enter))
      throw new Error(k.INVALID_ARGUMENT);
    this.name = t, this.group = e, this.command = r, this.children = i.children || [], this.attributes = i.attributes || [], this.arbitrary = i.arbitrary === !0, this.alignable = i.alignable === !0, this.editable = i.editable === !0, this.focusable = i.focusable === !0, this.navigable = i.navigable === !0, this.slotable = i.slotable === !0, this.sortable = i.sortable === !0, this.deletable = i.deletable === !0, this.empty = i.empty === !0, this.enter = i.enter;
  }
}
const O = {
  default: '<svg class="icon" viewBox="0 0 1024 1024" width="20" height="20"><path d="M672.298667 85.333333a128 128 0 0 1 90.538666 37.504L858.453333 218.453333A128 128 0 0 1 896 309.034667V810.666667a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V213.333333a128 128 0 0 1 128-128h416.298667zM640 149.333333H256A64 64 0 0 0 192 213.333333v597.333334A64 64 0 0 0 256 874.666667h512a64 64 0 0 0 64-64V341.333333H768a128 128 0 0 1-128-128V149.333333z m64 8.405334V213.333333A64 64 0 0 0 768 277.333333h55.594667a64 64 0 0 0-10.325334-13.568l-95.701333-95.701333a64 64 0 0 0-13.568-10.325333z"></path><path d="M341.333333 437.333333h341.333334a32 32 0 0 1 0 64H341.333333a32 32 0 1 1 0-64zM341.333333 608h170.666667a32 32 0 1 1 0 64H341.333333a32 32 0 1 1 0-64z"></path></svg>',
  help: '<svg class="icon" viewBox="0 0 1024 1024" width="20" height="20"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m39.658667 426.666667v64h-59.946667l-0.021333-64h59.968z m-3.541334-316.757333c38.72 7.808 84.778667 44.736 84.778667 98.453333 0 53.738667-43.882667 74.069333-59.605333 84.117333-14.506667 9.28-20.672 19.882667-21.525334 31.189334l-0.106666 2.816V597.333333h-59.968v-79.338666c0-18.816 6.037333-32 22.826666-43.648l3.776-2.496 33.685334-22.4c21.482667-14.464 21.184-43.498667 7.893333-56.32a60.373333 60.373333 0 0 0-52.842667-13.546667c-37.376 7.338667-41.685333 33.706667-41.941333 59.306667v14.485333H405.333333c0-49.834667 5.717333-72.426667 32.298667-100.970667 29.781333-31.893333 71.744-37.013333 110.485333-29.162666z"></path></svg>',
  h1: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M6 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 24H25" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.2261 24L39.0001 19.0166V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  h2: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M6 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 24H23" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 25C32 21.8334 34.6667 20 37 20C39.3334 20 42 21.8334 42 25C42 30.7 32 34.9333 32 40H42" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  h3: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M6 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 24H23" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 20H42L35 29C39 29 42 31 42 35C42 39 39 40 37 40C34.619 40 33 39 32 37.9" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  h4: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M6 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 24H23" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M39.9767 40V20L31 32.9967V35.0199H43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  h5: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M6 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 24H23" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 21.0093H32V28.0341C32 28 34 27 37 27C40 27 41 29.5339 41 33.5C41 37.4661 40 40 36 40C33 40 32 38 32 36.0078" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  h6: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M6 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 8V40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 24H23" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M36.5 40C39.5376 40 42 37.5376 42 34.5C42 31.4624 39.5376 29 36.5 29C33.4624 29 31 31.4624 31 34.5C31 37.5376 33.4624 40 36.5 40Z" stroke="#000" stroke-width="3"/><path d="M41.5962 24.7392C40.7778 22.5461 38.8044 21 36.5 21C33.4624 21 31 23.6863 31 27V34" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  fontSize: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path d="M504.283429 828.288c21.430857 0 32.566857-8.576 40.722285-32.146286l55.277715-151.716571h252.854857l54.857143 151.716571c8.576 23.588571 19.291429 32.146286 40.722285 32.146286 23.131429 0 38.582857-13.714286 38.582857-35.145143 0-7.277714-1.718857-13.714286-4.736-23.149714L781.165714 235.154286c-9.874286-26.569143-27.428571-39.424-54.436571-39.424-26.989714 0-44.562286 12.854857-53.997714 39.003428L471.277714 770.432c-3.419429 9.417143-4.278857 15.853714-4.278857 23.131429 0 21.430857 14.134857 34.724571 37.302857 34.724571z m117.010285-249.417143l103.698286-288.438857h2.578286l104.137143 288.420571zM73.563429 828.269714c17.152 0 29.147429-8.576 36.864-30.866285l34.285714-98.998858h156.854857l34.285714 98.998858c7.716571 22.729143 19.712 30.866286 37.302857 30.866285 21.412571 0 36.406857-13.714286 36.406858-33.865143 0-7.277714-1.28-14.994286-5.558858-25.709714l-127.725714-339.419428c-8.996571-24.868571-26.569143-40.722286-53.577143-40.722286-26.569143 0-43.702857 15.853714-52.699428 40.722286L41.856 768.713143c-3.84 10.715429-5.138286 18.432-5.138286 25.709714 0 20.150857 14.573714 33.865143 36.845715 33.865143z m90.441142-188.16l56.137143-167.131428h5.577143l56.576 167.131428z"/></svg>',
  paragraph: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 6v15h-2v-5a6 6 0 1 1 0-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 1 0 0 8V6z"/></svg>',
  heading: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M12 5V43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 5V43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 24L36 24" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  orderedList: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M9 4V13" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 13H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 27H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 19.9998C6 19.9998 9 16.9998 11 19.9998C13 22.9999 6 26.9998 6 26.9998" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.00016 34.5001C6.00016 34.5001 8.00016 31.5 11.0002 33.5C14.0002 35.5 11.0002 38 11.0002 38C11.0002 38 14.0002 40.5 11.0002 42.5C8.00015 44.5 6.00015 41.5 6.00015 41.5" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 38H9" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 4L6 6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 24H43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 38H43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 10H43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  unorderedList: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26Z" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M8 40C9.10457 40 10 39.1046 10 38C10 36.8954 9.10457 36 8 36C6.89543 36 6 36.8954 6 38C6 39.1046 6.89543 40 8 40Z" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M20 24H44" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 38H44" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 10H44" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  indent: '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 15 15"><path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path></svg>',
  "indent-right": '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 15 15"><path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path></svg>',
  "indent-left": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>',
  align: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M42 9H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 19H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 29H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 39H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "align-none": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M6 9H42" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 19H42" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 29H24" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 39H16" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 39C24 39 34.2386 39 37 39C39.7614 39 42 36.7614 42 34C42 31.2386 39.7614 29 37 29C35.7115 29 32 29 32 29M24 39L28 35M24 39L28 43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "align-left": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M42 9H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 19H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 29H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 39H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "align-right": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M42 9H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 19H14" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 29H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 39H14" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "align-center": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M36 19H12" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 9H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 29H6" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 39H12" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "align-justify": '<svg width="20" height="20" viewBox="0 0 20 20" class="icon"><path d="M3 5H17V4H3V5Z"></path><path d="M3 13H17V12H3V13Z"></path><path d="M17 9H3V8H17V9Z"></path><path d="M3 17H17V16H3V17Z"></path></svg>',
  horizontalRule: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M5 24H43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 38H27" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M37 38H43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 10H27" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 38H11" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10H11" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M37 10H43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  blockquote: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z" fill="#000"/></svg>',
  color: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1024 1024"><path d="M904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM253.7 736h85c4.2 0 8-2.7 9.3-6.8l53.7-166h219.2l53.2 166c1.3 4 5 6.8 9.3 6.8h89.1c1.1 0 2.2-0.2 3.2-0.5 5.1-1.8 7.8-7.3 6-12.4L573.6 118.6c-1.4-3.9-5.1-6.6-9.2-6.6H462.1c-4.2 0-7.9 2.6-9.2 6.6L244.5 723.1c-0.4 1-0.5 2.1-0.5 3.2-0.1 5.3 4.3 9.7 9.7 9.7z m255.9-516.1h4.1l83.8 263.8H424.9l84.7-263.8z"></path></svg>',
  background: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1024 1024"><path d="M766.4 744.3c43.7 0 79.4-36.2 79.4-80.5 0-53.5-79.4-140.8-79.4-140.8S687 610.3 687 663.8c0 44.3 35.7 80.5 79.4 80.5zM389.3 700.2c7.1 7.1 18.6 7.1 25.6 0l256.1-256c7.1-7.1 7.1-18.6 0-25.6l-256-256c-0.6-0.6-1.3-1.2-2-1.7l-78.2-78.2c-3.5-3.5-9.3-3.5-12.8 0l-48 48c-3.5 3.5-3.5 9.3 0 12.8l67.2 67.2-207.8 207.9c-7.1 7.1-7.1 18.6 0 25.6l255.9 256z m12.9-448.6l178.9 178.9H223.4l178.8-178.9zM904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z"></path></svg>',
  image: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 36L31 26L21 35L14 29L6 35" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  video: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 28V21.9378L25.75 24.9689L31 28L25.75 31.0311L20.5 34.0622V28Z" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 15H42" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M33 6L27 15" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 6L15 15" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  audio: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M30 34.5C30 32.567 31.567 31 33.5 31H41V34.4C41 36.3882 39.3882 38 37.4 38H33.5C31.567 38 30 36.433 30 34.5Z" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M6 38.5C6 36.567 7.567 35 9.5 35H16V38.4C16 40.3882 14.3882 42 12.4 42H9.5C7.567 42 6 40.433 6 38.5Z" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M16 18.044V18.044L41 12.125" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 38V10L41 4V33.6924" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  iframe: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M25 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V24.9412" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z" fill="none" stroke="#000" stroke-width="3"/><path d="M32 35H44" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 29V41" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)" fill="#000"/><circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)" fill="#000"/></svg>',
  table: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M42 6H6C4.89543 6 4 6.89543 4 8V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V8C44 6.89543 43.1046 6 42 6Z" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M4 18H44" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 18V42" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M30.5 18V42" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 30H44" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 8V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V8" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  preformat: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M16 4C14 4 11 5 11 9C11 13 11 15 11 18C11 21 6 23 6 23C6 23 11 25 11 28C11 31 11 35 11 39C11 43 14 44 16 44" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M32 4C34 4 37 5 37 9C37 13 37 15 37 18C37 21 42 23 42 23C42 23 37 25 37 28C37 31 37 35 37 39C37 43 34 44 32 44" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  section: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><rect x="6" y="12" width="36" height="30" rx="2" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M17.9497 24.0083L29.9497 24.0083" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 13L13 5H35L42 13" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  details: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="36" height="36" rx="3" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><rect x="13" y="13" width="8" height="8" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M27 13L35 13" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 20L35 20" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 28L35 28" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 35H35" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  division: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M12 4H4V12H12V4Z" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M44 36H36V44H44V36Z" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M12 36H4V44H12V36Z" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M44 4H36V12H44V4Z" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M8 36V12" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 5"/><path d="M40 36V12" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 5"/><path d="M12 8H36" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 5"/><path d="M12 40H36" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 5"/></svg>',
  block: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M39 14C41.7614 14 44 11.7614 44 9C44 6.23858 41.7614 4 39 4C36.2386 4 34 6.23858 34 9C34 11.7614 36.2386 14 39 14Z" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 44C11.7614 44 14 41.7614 14 39C14 36.2386 11.7614 34 9 34C6.23858 34 4 36.2386 4 39C4 41.7614 6.23858 44 9 44Z" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 4H4V14H14V4Z" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 34H34V44H44V34Z" fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 9H14" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 39H14" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 34V14" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M39 34V14" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  lineHeight: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M16 35L10 41L4 35" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 13L10 7L4 13" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 7V41" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 9H22" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 19H22" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 29H22" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 39H22" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  bold: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 24C29.5056 24 33.9688 19.5228 33.9688 14C33.9688 8.47715 29.5056 4 24 4H11V24H24Z" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0312 44C33.5368 44 38 39.5228 38 34C38 28.4772 33.5368 24 28.0312 24H11V44H28.0312Z" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  italic: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M20 6H36" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 42H28" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 5.95215L19 41.9998" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  strong: "",
  underline: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M8 44H40" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M37 6.09717C37 12.7638 37 15.3335 37 22.0002C37 29.1799 31.1797 35.0002 24 35.0002C16.8203 35.0002 11 29.1799 11 22.0002C11 15.3335 11 12.7638 11 6.09717" stroke="#000" stroke-width="3" stroke-linecap="round"/></svg>',
  strikethrough: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M5 24H43" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 24C40 30 34 44 24 44C13.9999 44 12 36 12 36" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.9999 12C35.9999 12 33 4 23.9999 4C14.9999 4 11.4359 11.5995 15.6096 18" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 36C12 36 15.9999 44 24 44C32 44 36.564 36.4005 32.3903 30" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  link: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M26.2401 16.373L17.1001 7.23303C14.4388 4.57168 10.0653 4.6303 7.33158 7.36397C4.59791 10.0976 4.53929 14.4712 7.20064 17.1325L15.1359 25.0678" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M32.9027 23.0031L40.838 30.9384C43.4994 33.5998 43.4407 37.9733 40.7071 40.707C37.9734 43.4407 33.5999 43.4993 30.9385 40.8379L21.7985 31.6979" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M26.1093 26.1416C28.843 23.4079 28.9016 19.0344 26.2403 16.373" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.7989 21.7984C19.0652 24.5321 19.0066 28.9056 21.6679 31.5669" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  mark: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M8 44L8 6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V44L24 35.7273L8 44Z" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M23.9497 13.9497L23.9497 25.9497" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.9497 19.9497L29.9497 19.9497" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  small: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M4 8H32" stroke="#000" stroke-width="3" stroke-linecap="round"/><path d="M28 21H44" stroke="#000" stroke-width="3" stroke-linecap="round"/><path d="M18 42L18 8" stroke="#000" stroke-width="3" stroke-linecap="round"/><path d="M36 42L36 21" stroke="#000" stroke-width="3" stroke-linecap="round"/></svg>',
  definition: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z" fill="none"/><path d="M14 10C14 12.2091 12.2091 14 10 14M14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14M14 10H20M10 14V20" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42C12.2091 42 14 40.2091 14 38Z" fill="none"/><path d="M14 38C14 35.7909 12.2091 34 10 34M14 38C14 40.2091 12.2091 42 10 42C7.79086 42 6 40.2091 6 38C6 35.7909 7.79086 34 10 34M14 38H20M10 34V28" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 38C34 35.7909 35.7909 34 38 34C40.2091 34 42 35.7909 42 38C42 40.2091 40.2091 42 38 42C35.7909 42 34 40.2091 34 38Z" fill="none"/><path d="M34 38C34 35.7909 35.7909 34 38 34M34 38C34 40.2091 35.7909 42 38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34M34 38H28M38 34V28" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 10C34 12.2091 35.7909 14 38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10Z" fill="none"/><path d="M34 10C34 12.2091 35.7909 14 38 14M34 10C34 7.79086 35.7909 6 38 6C40.2091 6 42 7.79086 42 10C42 12.2091 40.2091 14 38 14M34 10H28M38 14V20" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 24H31" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 31V17" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  quote: '<svg class="icon" width="24" height="24" viewBox="0 0 1024 1024"><path d="M379.01 256L231.35 511.75l0.05 0.03c-10.97 18.88-17.26 40.81-17.26 64.22 0 70.69 57.31 128 128 128s128-57.31 128-128c0-58.85-39.72-108.42-93.81-123.37L489.86 256H379.01zM696.34 452.63L809.86 256H699.01L551.35 511.75l0.05 0.03c-10.97 18.88-17.26 40.81-17.26 64.22 0 70.69 57.31 128 128 128s128-57.31 128-128c0-58.85-39.71-108.42-93.8-123.37z"></path></svg>',
  cite: "",
  code: '<svg class="icon" viewBox="0 0 1024 1024" width="24" height="24"><path d="M188.330667 512l17.664 17.664A170.666667 170.666667 0 0 1 256 650.368V768a85.333333 85.333333 0 0 0 85.333333 85.333333h42.666667a42.666667 42.666667 0 0 1 0 85.333334H341.333333a170.666667 170.666667 0 0 1-170.666666-170.666667v-117.632a85.333333 85.333333 0 0 0-25.002667-60.373333l-44.8-44.8a46.933333 46.933333 0 0 1 0-66.389334l44.8-44.8A85.333333 85.333333 0 0 0 170.666667 373.632V256a170.666667 170.666667 0 0 1 170.666666-170.666667h42.666667a42.666667 42.666667 0 1 1 0 85.333334H341.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v117.632a170.666667 170.666667 0 0 1-50.005333 120.704L188.330667 512z m629.674666 17.664l17.664-17.664-17.664-17.664A170.666667 170.666667 0 0 1 768 373.632V256a85.333333 85.333333 0 0 0-85.333333-85.333333h-42.666667a42.666667 42.666667 0 0 1 0-85.333334h42.666667a170.666667 170.666667 0 0 1 170.666666 170.666667v117.632a85.333333 85.333333 0 0 0 25.002667 60.373333l44.8 44.8a46.933333 46.933333 0 0 1 0 66.389334l-44.8 44.8A85.333333 85.333333 0 0 0 853.333333 650.368V768a170.666667 170.666667 0 0 1-170.666666 170.666667h-42.666667a42.666667 42.666667 0 0 1 0-85.333334h42.666667a85.333333 85.333333 0 0 0 85.333333-85.333333v-117.632a170.666667 170.666667 0 0 1 50.005333-120.704z m-303.786666-159.146667a42.666667 42.666667 0 0 1 80.938666 26.965334l-85.333333 256a42.666667 42.666667 0 1 1-80.981333-26.965334l85.333333-256z" /></svg>',
  keyboard: '<svg class="icon" viewBox="0 0 1024 1024" width="24" height="24"><path d="M810.666667 213.333333a128 128 0 0 1 128 128v341.333334a128 128 0 0 1-128 128H213.333333a128 128 0 0 1-128-128V341.333333a128 128 0 0 1 128-128h597.333334z m0 85.333334H213.333333a42.666667 42.666667 0 0 0-42.666666 42.666666v341.333334a42.666667 42.666667 0 0 0 42.666666 42.666666h597.333334a42.666667 42.666667 0 0 0 42.666666-42.666666V341.333333a42.666667 42.666667 0 0 0-42.666666-42.666666zM341.333333 554.666667v85.333333H256v-85.333333h85.333333z m426.666667 0v85.333333h-85.333333v-85.333333h85.333333z m-128 0v85.333333H384v-85.333333h256zM341.333333 384v85.333333H256V384h85.333333z m128 0v85.333333H384V384h85.333333z m128 0v85.333333h-85.333333V384h85.333333z m170.666667 0v85.333333h-128V384h128z" /></svg>',
  sample: "",
  variable: '<svg class="icon" viewBox="0 0 1024 1024" width="24" height="24"><path d="M298.666667 362.666667c0-94.037333 74.154667-170.624 170.88-188.16l-0.170667-1.92L469.333333 128a42.666667 42.666667 0 0 1 85.333334 0v42.666667l-0.170667 3.84C651.221333 192.042667 725.333333 268.586667 725.333333 362.666667a42.666667 42.666667 0 0 1-85.034666 4.992L640 362.666667C640 305.109333 583.850667 256 512 256S384 305.109333 384 362.666667c0 55.424 52.053333 102.997333 120.064 106.453333L512 469.333333c116.650667 0 213.333333 84.608 213.333333 192 0 93.952-73.984 170.453333-170.666666 188.16V896a42.666667 42.666667 0 0 1-85.333334 0v-46.506667c-96.64-17.664-170.666667-94.165333-170.666666-188.16a42.666667 42.666667 0 0 1 85.333333 0c0 57.557333 56.149333 106.666667 128 106.666667s128-49.109333 128-106.666667c0-55.424-52.053333-102.997333-120.064-106.453333L512 554.666667c-116.650667 0-213.333333-84.608-213.333333-192z" /></svg>',
  subscript: '<svg class="icon" viewBox="0 0 1024 1024" width="24" height="24"><path d="M682.666667 316.16L486.826667 512 682.666667 707.84 622.506667 768 426.666667 572.16 230.826667 768 170.666667 707.84 366.506667 512 170.666667 316.16 230.826667 256 426.666667 451.84 622.506667 256 682.666667 316.16m249.6 581.12h-208.213334v-42.666667l37.973334-34.133333c32.426667-27.733333 56.32-50.773333 72.533333-69.546667 15.786667-18.773333 23.893333-36.266667 24.32-52.906666a38.314667 38.314667 0 0 0-11.52-29.866667c-7.68-6.826667-20.053333-11.946667-36.693333-11.946667-13.226667 0-24.746667 2.56-35.84 7.68l-28.16 16.213334-19.2-49.92c11.52-8.96 25.173333-16.64 41.813333-22.613334s34.986667-10.24 55.04-10.24c33.28 1.706667 58.88 10.666667 75.946667 28.16 17.066667 17.493333 26.453333 39.68 26.453333 66.986667-0.426667 23.893333-8.106667 46.08-23.04 66.133333-14.506667 20.053333-32.426667 39.253333-54.186667 58.026667l-27.306666 22.186667v0.853333h110.08v57.6z"/></svg>',
  superscript: '<svg class="icon" viewBox="0 0 1024 1024" width="24" height="24"><path d="M682.666667 316.16L486.826667 512 682.666667 707.84 622.506667 768 426.666667 572.16 230.826667 768 170.666667 707.84 366.506667 512 170.666667 316.16 230.826667 256 426.666667 451.84 622.506667 256 682.666667 316.16M932.266667 384h-208.213334V341.333333l37.973334-34.986666c32.426667-27.306667 56.32-50.346667 72.533333-69.546667 15.786667-18.773333 23.893333-36.266667 24.32-52.48a37.717333 37.717333 0 0 0-11.52-29.866667c-7.68-8.106667-20.053333-11.946667-36.693333-12.373333-13.226667 0.426667-24.746667 2.986667-35.84 7.253333l-28.16 16.64-19.2-49.92c11.52-9.386667 25.173333-16.64 41.813333-22.613333S804.266667 85.333333 824.32 85.333333c33.28 0 58.88 8.533333 75.946667 26.026667 17.066667 16.64 26.453333 39.68 26.453333 66.986667-0.426667 23.893333-8.106667 46.08-23.04 66.133333-14.506667 20.48-32.426667 39.68-54.186667 58.026667l-27.306666 22.186666v0.853334h110.08V384z" /></svg>',
  time: '<svg class="icon" viewBox="0 0 1024 1024" width="24" height="24"><path d="M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-0.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c0.1-6.2-5-11.2-11.1-11.2z" /><path d="M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7-12.7 20.1-27.5 38.7-44.5 55.7-29.3 29.3-63.4 52.3-101.3 68.3-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3 17 17 31.8 35.6 44.5 55.7 3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8 3.1-6.1-1.4-13.3-8.2-13.3z"/></svg>',
  data: '<svg class="icon" viewBox="0 0 1024 1024" width="24" height="24"><path d="M437.333333 181.333333A32 32 0 0 1 469.333333 213.333333v341.333334h341.333334a32 32 0 0 1 31.701333 27.648l0.298667 4.352c0 212.053333-171.946667 362.666667-384 362.666666a384 384 0 0 1-384-384c0-212.053333 150.613333-384 362.666666-384zM405.333333 246.912l-8.917333 1.024c-157.44 20.053333-257.749333 154.538667-257.749333 317.397333a320 320 0 0 0 320 320c162.858667 0 297.301333-100.352 317.44-257.749333l0.938666-8.917333H437.333333a32 32 0 0 1-31.701333-27.648L405.333333 586.666667V246.912z m160-172.245333a384 384 0 0 1 384 384 32 32 0 0 1-32 32h-352a32 32 0 0 1-32-32V106.666667a32 32 0 0 1 32-32zM597.333333 140.245333V426.666667h286.378667l-0.981333-8.917334a320.170667 320.170667 0 0 0-276.48-276.48L597.333333 140.245333z" /></svg>',
  insertion: '<svg class="icon" viewBox="0 0 1024 1024" width="24" height="24"><path d="M755.2 789.333333h-486.4a21.333333 21.333333 0 1 0 0 42.666667h486.4a21.333333 21.333333 0 1 0 0-42.666667zM288.682667 327.970133c2.286933-1.0496 3.950933-2.8928 4.9664-5.5296a526.805333 526.805333 0 0 1 17.6128-34.773333c5.632-9.992533 12.270933-18.176 19.933866-24.490667 7.645867-6.3232 16.7168-11.076267 27.204267-14.225066 10.453333-3.165867 23.364267-4.744533 38.6816-4.744534h78.916267v421.998934c0 12.125867-5.12 20.539733-15.3344 25.284266-10.2144 4.753067-26.8032 8.695467-49.800534 11.861334-5.102933 1.0496-7.645867 5.282133-7.645866 12.6464 0 3.6864 0.4864 8.1664 1.536 13.422933 16.3328-1.058133 33.8176-1.9712 52.48-2.773333a1281.186133 1281.186133 0 0 1 109.550933 0c18.116267 0.802133 35.3536 1.7152 51.720533 2.773333 0.9984-5.256533 1.536-9.745067 1.536-13.422933 0-8.430933-2.816-12.6464-8.430933-12.6464-22.980267-2.6368-39.330133-6.442667-49.032533-11.460267-9.719467-5.000533-14.5664-13.559467-14.5664-25.685333V244.1984h78.916266c15.317333 0 28.219733 1.5872 38.6816 4.744533 10.4704 3.1488 19.396267 7.901867 26.837334 14.225067 7.381333 6.314667 13.9008 14.498133 19.515733 24.490667 5.632 10.018133 11.229867 21.6064 16.8704 34.773333 1.015467 2.645333 2.798933 4.48 5.3504 5.5296 2.568533 1.058133 4.864 1.578667 6.903467 1.578667 3.063467 0 5.751467-0.529067 8.046933-1.578667 2.304-1.0496 4.718933-2.107733 7.287467-3.165867-5.632-17.911467-9.582933-34.244267-11.886934-48.989866a817.450667 817.450667 0 0 0-6.519466-37.1456c-2.048-10.0096-4.215467-17.774933-6.5024-23.3216-2.304-5.5296-6.016-8.2944-11.118934-8.2944-4.087467 0-9.335467 0.273067-15.701333 0.802133-6.4 0.529067-13.397333 1.058133-21.0688 1.5872l-22.980267 1.578667c-7.662933 0.529067-14.549333 0.776533-20.6848 0.776533H384.0512c-6.6304 0-13.781333-0.256-21.435733-0.776533l-22.613334-1.578667c-7.3984-0.529067-14.429867-1.058133-21.0688-1.5872a208.238933 208.238933 0 0 0-15.317333-0.802133c-5.12 0-8.814933 2.653867-11.118933 7.9104-2.286933 5.282133-4.462933 12.7744-6.5024 22.528-2.048 9.745067-4.352 22.007467-6.903467 36.744533-2.568533 14.754133-6.4 31.607467-11.502933 50.577067 4.096 3.165867 8.9344 4.744533 14.5664 4.744533 2.048 0 4.215467-0.529067 6.528-1.578667z"></path></svg>',
  deletion: '<svg class="icon"viewBox="0 0 1024 1024" width="24" height="24"><path d="M763.733333 507.733333h-503.466666a21.333333 21.333333 0 1 0 0 42.666667h503.466666a21.333333 21.333333 0 1 0 0-42.666667zM612.8128 786.8672c-22.980267-2.568533-43.016533-6.2464-52.718933-11.118933-9.710933-4.846933-18.2272-13.1328-18.2272-24.900267V584.533333h-68.266667v166.314667c0 11.767467-3.310933 19.9168-13.525333 24.516267s-25.890133 8.430933-48.887467 11.502933c-5.102933 1.015467-7.202133 5.12-7.202133 12.253867 0 3.584 0.708267 7.918933 1.757866 13.013333 16.3328-1.015467 33.937067-1.902933 52.599467-2.679467a1325.6448 1325.6448 0 0 1 109.627733 0c18.116267 0.785067 35.370667 1.664 51.729067 2.679467 0.9984-5.102933 1.544533-9.429333 1.544533-13.013333 0-8.174933-2.807467-12.253867-8.430933-12.253867zM289.902933 329.088a9.386667 9.386667 0 0 0 4.9664-5.358933 506.965333 506.965333 0 0 1 17.6128-33.723734c5.632-9.685333 12.270933-17.621333 19.933867-23.739733 7.645867-6.135467 16.7168-8.8064 27.204267-11.869867 10.453333-3.063467 23.364267-2.6624 38.6816-2.6624H473.6v221.866667h68.266667v-221.866667h86.263466c15.317333 0 28.219733-0.401067 38.6816 2.6624 10.4704 3.054933 19.396267 6.698667 26.837334 12.834134a84.804267 84.804267 0 0 1 19.515733 23.253333 341.845333 341.845333 0 0 1 16.8704 33.476267c1.015467 2.56 2.798933 4.224 5.3504 5.239466 2.568533 1.024 4.864 1.467733 6.903467 1.467734 3.063467 0 5.751467-0.5376 8.046933-1.5616 2.304-1.024 4.718933-2.065067 7.287467-3.080534-5.632-17.3568-9.582933-33.211733-11.886934-47.5136a770.5856 770.5856 0 0 0-6.519466-36.010666c-2.048-9.7024-4.215467-17.237333-6.5024-22.6048-2.304-5.358933-6.016-8.0384-11.118934-8.0384-4.087467 0-9.335467 0.264533-15.701333 0.776533-6.4 0.512-13.397333 1.024-21.0688 1.536-7.662933 0.512-15.3344 1.5872-22.980267 2.107733-7.662933 0.512-14.549333 1.322667-20.6848 1.322667H385.262933c-6.6304 0-13.781333-0.8192-21.435733-1.322667-7.68-0.520533-15.197867-1.3056-22.613333-1.8176-7.3984-0.520533-14.429867-1.169067-21.0688-1.681066-6.6304-0.512-11.7504-0.8448-15.317334-0.8448-5.12 0-8.814933 2.5344-11.118933 7.637333-2.286933 5.12-4.462933 12.3648-6.5024 21.819733-2.048 9.4464-4.352 21.3248-6.903467 35.618134-2.568533 14.301867-6.4 30.634667-11.502933 49.024 4.096 3.063467 8.9344 4.599467 14.5664 4.599466 2.048-0.008533 4.215467-0.512 6.536533-1.544533z"></path></svg>',
  trigger: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 24 48" fill="none"><circle cx="6" cy="12" r="3" fill="#000"/><circle cx="6" cy="24" r="3" fill="#000"/><circle cx="6" cy="36" r="3" fill="#000"/><circle cx="18" cy="12" r="3" fill="#000"/><circle cx="18" cy="24" r="3" fill="#000"/><circle cx="18" cy="36" r="3" fill="#000"/></svg>',
  "sort-first": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M34 36L22 24L34 12" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 12V36" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "sort-last": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M14 12L26 24L14 36" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 12V36" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "sort-prev": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M31 36L19 24L31 12" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "sort-next": '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M19 12L31 24L19 36" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  delete: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="none"><path d="M9 10V44H39V10H9Z" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/><path d="M20 20V33" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 20V33" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 10H44" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 10L19.289 4H28.7771L32 10H16Z" fill="none" stroke="#000" stroke-width="3" stroke-linejoin="round"/></svg>',
  "arrow-down": '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 48 48" fill="none"><path d="M36 18L24 30L12 18" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "arrow-up": '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 48 48" fill="none"><path d="M13 30L25 18L37 30" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};
var It, V, ot;
class f {
  constructor(t) {
    h(this, V);
    h(this, It, void 0);
    if (!(t instanceof q))
      throw new Error(k.INVALID_ARGUMENT);
    b(this, It, t);
  }
  get editor() {
    return l(this, It);
  }
  static get name() {
    throw new Error(k.MISSING_NAME);
  }
  static get dependencies() {
    return [];
  }
  static get config() {
    return {};
  }
  init() {
    throw new Error(k.NOT_IMPLEMENTED);
  }
  _(t) {
    return this.editor.translator.translate(this.constructor.name, t);
  }
  _base(t) {
    return this.editor.translator.translate("base", t);
  }
  _i18n(t) {
    t[this.editor.config.lang] && this.editor.translator.set(this.constructor.name, t[this.editor.config.lang]);
  }
  _tag(t) {
    this.editor.tags.set(new Or(t));
  }
  _command(t) {
    this.editor.commands.set(new y(this.editor, this.constructor.name, t));
  }
  _menubar({ label: t, command: e, arrowDown: r, uuid: i }) {
    this.editor.menubar.appendChild(
      m(this, V, ot).call(this, {
        label: t,
        command: e,
        arrowDown: r,
        uuid: i
      })
    );
  }
  _toolbar({ label: t, command: e, arrowDown: r, uuid: i }) {
    this.editor.toolbar.appendChild(
      m(this, V, ot).call(this, {
        label: t,
        command: e,
        arrowDown: r,
        uuid: i
      })
    );
  }
  _formatbar({ label: t, command: e, key: r, arrowDown: i, uuid: o }) {
    const n = this._base("Alt"), c = this._base("Shift"), g = t + (r ? ` [${n} + ${c} + ${r}]` : "");
    this.editor.formatbar.appendChild(
      m(this, V, ot).call(this, {
        label: t,
        command: e,
        title: g,
        key: r,
        arrowDown: i,
        uuid: o
      })
    );
  }
  _focusbar({ label: t, command: e, key: r, type: i, uuid: o }) {
    const { firstChild: n, lastChild: c } = this.editor.focusbar;
    if (i === "toggle") {
      n.appendChild(
        m(this, V, ot).call(this, {
          label: t,
          command: e,
          title: t,
          key: r
        })
      );
      return;
    }
    const g = this._base("Ctrl"), p = t + (r ? ` [${g} + ${r}]` : "");
    c.appendChild(
      m(this, V, ot).call(this, {
        label: t,
        title: p,
        command: e,
        key: r,
        uuid: o
      })
    );
  }
}
It = new WeakMap(), V = new WeakSet(), ot = function({ label: t, command: e, title: r, key: i, arrowDown: o, uuid: n }) {
  if (!x(t) || !x(e))
    throw new Error(k.INVALID_ARGUMENT);
  const c = `<span class='btn-icon'>${O[e] || O.default}</span>`, g = `<span class='btn-label'>${t}</span>`, p = o ? `<i class='separator'></i><span class='btn-arrow'>${o}</span>` : "", L = {
    type: "button",
    "data-command": e,
    "data-title": r || t,
    "data-key": i,
    "data-tip": "tooltip",
    "data-tip-placement": "bottom",
    ...n ? { "data-uuid": n } : {}
  };
  return this.editor.dom.createElement(s.BUTTON, {
    attributes: L,
    html: `${c}${p}${g}`
  });
};
var F;
class ai {
  constructor(t = []) {
    h(this, F, /* @__PURE__ */ new Map());
    t.forEach((e) => this.set(e));
  }
  get(t) {
    return l(this, F).get(t);
  }
  set(t) {
    if (!(t instanceof f))
      throw new Error(k.INVALID_ARGUMENT);
    l(this, F).set(t.constructor.name, t);
  }
  init() {
    l(this, F).forEach((t) => t.init());
  }
  freeze() {
    l(this, F).forEach((t) => Object.freeze(t)), Object.freeze(l(this, F)), Object.freeze(this);
  }
}
F = new WeakMap();
var K;
class di {
  constructor(t = []) {
    h(this, K, /* @__PURE__ */ new Map());
    t.forEach((e) => this.set(e));
  }
  get(t) {
    return l(this, K).get(t instanceof HTMLElement ? t.localName : t);
  }
  set(t) {
    if (!(t instanceof Or))
      throw new Error(k.INVALID_ARGUMENT);
    l(this, K).set(t.name, t);
  }
  allowed(t, e, r = !1) {
    var o, n;
    const i = r ? e : (o = this.get(e)) == null ? void 0 : o.group;
    return !!((n = this.get(t)) != null && n.children.includes(i));
  }
  freeze() {
    l(this, K).forEach((t) => {
      Object.freeze(t.children), Object.freeze(t.attributes), Object.freeze(t);
    }), Object.freeze(l(this, K)), Object.freeze(this);
  }
}
K = new WeakMap();
var R, U, P, Ie, Br, ve, jr;
class li {
  constructor(t, e, r, i) {
    h(this, Ie);
    h(this, ve);
    h(this, R, void 0);
    h(this, U, void 0);
    h(this, P, void 0);
    if (!(t instanceof Rr) || !x(e) || !x(r) || !$e(i))
      throw new Error(k.INVALID_ARGUMENT);
    b(this, R, t), b(this, U, l(this, R).createElement(s.FORM, {
      attributes: { method: "dialog" }
    })), this.addFieldset(), m(this, Ie, Br).call(this, r, i), m(this, ve, jr).call(this, e);
  }
  get form() {
    return l(this, U);
  }
  addFieldset() {
    const t = l(this, R).createElement(s.FIELDSET);
    return l(this, P) ? l(this, P).insertAdjacentElement(I.AFTEREND, t) : l(this, U).insertAdjacentElement(I.AFTERBEGIN, t), b(this, P, t), this;
  }
  addLegend(t) {
    if (!x(t))
      throw new Error(k.INVALID_ARGUMENT);
    return l(this, P).appendChild(l(this, R).createElement(s.LEGEND, { html: t })), this;
  }
  addTextInput(t, e, r = {}) {
    return this.addInput(t, e, r, "text");
  }
  addNumberInput(t, e, r = {}) {
    return this.addInput(t, e, r, "number");
  }
  addInput(t, e, r = {}, i = "text") {
    if (!x(t) || !x(e) || !x(i))
      throw new Error(k.INVALID_ARGUMENT);
    Object.assign(r, { id: `editor-${t}`, name: t, type: i });
    const o = l(this, R).createElement(s.DIV, {
      attributes: { class: "form-item" }
    });
    return o.appendChild(
      l(this, R).createElement(s.LABEL, {
        attributes: { for: r.id },
        html: e
      })
    ), o.appendChild(l(this, R).createElement(s.INPUT, { attributes: r })), r.required && o.setAttribute("data-required", ""), l(this, P).appendChild(o), this;
  }
}
R = new WeakMap(), U = new WeakMap(), P = new WeakMap(), Ie = new WeakSet(), Br = function(t, e) {
  const r = l(this, R).createElement(s.BUTTON, {
    attributes: { type: "button", class: "cancel" },
    html: t
  });
  return r.addEventListener("click", e), l(this, U).appendChild(r), this;
}, ve = new WeakSet(), jr = function(t) {
  const e = l(this, R).createElement(s.BUTTON, {
    attributes: { type: "submit" },
    html: t
  });
  return l(this, U).appendChild(e), this;
};
var vt, _t, Ht, Nt, _e, Sr, He, zr;
class D {
  constructor(t, e, r = void 0) {
    h(this, _e);
    h(this, He);
    h(this, vt, void 0);
    h(this, _t, void 0);
    h(this, Ht, void 0);
    h(this, Nt, void 0);
    if (!(t instanceof q) || !x(e) || !We(r))
      throw new Error(k.INVALID_ARGUMENT);
    b(this, vt, t), b(this, _t, e), b(this, Ht, r);
  }
  get editor() {
    return l(this, vt);
  }
  get name() {
    return l(this, _t);
  }
  get url() {
    return l(this, Ht);
  }
  get formCreator() {
    return l(this, Nt);
  }
  open(t, e = {}) {
    this.url ? m(this, _e, Sr).call(this, t, e) : m(this, He, zr).call(this, t, e);
  }
  _(t) {
    return this.editor.translator.translate(this.name, t);
  }
  _prepareForm() {
    throw new Error(k.NOT_IMPLEMENTED);
  }
  cleanup() {
    Array.from(this.editor.element.getElementsByTagName(s.DIALOG)).forEach((t) => {
      t.parentElement.removeChild(t);
    });
  }
}
vt = new WeakMap(), _t = new WeakMap(), Ht = new WeakMap(), Nt = new WeakMap(), _e = new WeakSet(), Sr = function(t, e = {}) {
  this.editor.dom.open({
    url: this.url,
    name: this.name,
    call: t,
    params: e
  });
}, He = new WeakSet(), zr = function(t, e = {}) {
  const r = this.editor.dom.getRange();
  this.cleanup();
  const i = () => {
    r && this.editor.dom.setRange(r), this.cleanup();
  };
  b(this, Nt, new li(
    this.editor.dom,
    this._("Save"),
    this._("Cancel"),
    i
  )), this._prepareForm();
  const o = this.formCreator.form;
  o.addEventListener("submit", (c) => {
    c.preventDefault(), c.stopPropagation(), i();
    const g = {};
    Array.from(o.elements).forEach((p) => g[p.name] = p.value), t(g);
  }), Object.entries(e).forEach(
    ([c, g]) => o.elements[c] && (o.elements[c].value = g)
  );
  const n = this.editor.dom.createElement(s.DIALOG);
  n.addEventListener("close", i), n.appendChild(o), n.show(), this.editor.element.appendChild(n);
};
var Q;
class ci {
  constructor(t = []) {
    h(this, Q, /* @__PURE__ */ new Map());
    t.forEach((e) => this.set(e));
  }
  get(t) {
    return l(this, Q).get(t);
  }
  set(t) {
    if (!(t instanceof D))
      throw new Error(k.INVALID_ARGUMENT);
    l(this, Q).set(t.name, t);
  }
  freeze() {
    l(this, Q).forEach((t) => Object.freeze(t)), Object.freeze(l(this, Q)), Object.freeze(this);
  }
}
Q = new WeakMap();
var G, $, X;
class hi {
  constructor(t) {
    h(this, G, void 0);
    h(this, $, void 0);
    h(this, X, void 0);
    b(this, G, t), b(this, $, l(this, G).dom.createElement(s.DIV, {
      attributes: {
        class: "dropdown-content"
      }
    })), b(this, X, l(this, G).dom.createElement(s.UL, {
      attributes: {
        class: "dropdown-menu"
      }
    }));
  }
  get content() {
    return l(this, $);
  }
  get menu() {
    return l(this, X);
  }
  addMenuItem(t, e = {}) {
    if (!(x(t) || t instanceof HTMLElement))
      throw new Error(k.INVALID_ARGUMENT);
    const r = { ...e };
    r.class !== "dropdown-menu-item" && (r.class = "dropdown-menu-item");
    const i = l(this, G).dom.createElement(s.LI, {
      attributes: r
    });
    return x(t) ? i.innerHTML = t : t instanceof HTMLElement && i.appendChild(t), l(this, X).appendChild(i), l(this, $).appendChild(l(this, X)), this;
  }
  addHtmlElement(t, e = {}) {
    if (!(x(t) || t instanceof HTMLElement))
      throw new Error(k.INVALID_ARGUMENT);
    return x(t) ? l(this, $).innerHTML = t : t instanceof HTMLElement && l(this, $).appendChild(t), this;
  }
  createButton({ label: t, command: e, title: r, key: i, tip: o }) {
    if (!x(t) || !x(r) || !We(i))
      throw new Error(k.INVALID_ARGUMENT);
    const n = `<span class='btn-icon'>${O[e]}</span>`, c = `<span class='btn-label'>${t}</span>`;
    return l(this, G).dom.createElement(s.BUTTON, {
      attributes: {
        type: "button",
        title: r,
        "data-title": r,
        "data-command": e,
        "data-key": i,
        ...o ? {
          "data-tip": "tooltip",
          "data-tip-placement": "right"
        } : {}
      },
      html: O[e] ? `${n}${c}` : t
    });
  }
}
G = new WeakMap(), $ = new WeakMap(), X = new WeakMap();
var B, Rt, yt, Ne, Vr, Dt, Je;
class W {
  constructor(t, e) {
    h(this, Ne);
    h(this, Dt);
    h(this, B, void 0);
    h(this, Rt, void 0);
    h(this, yt, void 0);
    if (!(t instanceof q) || !x(e))
      throw new Error(k.INVALID_ARGUMENT);
    b(this, B, t), b(this, Rt, e);
  }
  get editor() {
    return l(this, B);
  }
  get name() {
    return l(this, Rt);
  }
  get dropdownContent() {
    return l(this, yt);
  }
  _(t) {
    return this.editor.translator.translate(this.name, t);
  }
  open(t, e = {}, r) {
    m(this, Ne, Vr).call(this, t, e, r);
  }
  cleanup() {
    const t = l(this, B).element, e = t.getElementsByTagName(s.DROPDOWN);
    Array.from(e).forEach((r) => {
      var i;
      if (r.classList.remove("dropdown-animate-in"), r.classList.add("dropdown-animate-out"), r.parentElement) {
        (i = r.parentElement) == null || i.removeChild(r);
        const { command: o } = r.dataset;
        if (o) {
          const n = t.querySelector(`button[data-command=${o}]`);
          m(this, Dt, Je).call(this, n, !1);
        }
      }
    });
  }
}
B = new WeakMap(), Rt = new WeakMap(), yt = new WeakMap(), Ne = new WeakSet(), Vr = function(t, e, r) {
  var g, p;
  const i = this.editor.dom.getRange();
  this.cleanup(), b(this, yt, new hi(l(this, B))), (g = this._prepareContent) == null || g.call(this);
  const o = l(this, B).dom.createElement(s.DROPDOWN, {
    attributes: {
      ...e,
      class: e["data-command"] || "",
      "data-uuid": r.dataset.uuid
    }
  }), n = l(this, B).dom.createElement(s.I, {
    attributes: { class: "arrow", role: "arrow" }
  });
  o.insertAdjacentElement(I.AFTERBEGIN, n), o.addEventListener("close", () => {
    i && this.editor.dom.setRange(i), this.cleanup();
  });
  const { content: c } = this.dropdownContent;
  o.appendChild(c), (p = this._readyContent) == null || p.call(this, o, c, t, () => this.cleanup()), o.show(r, l(this, B).element), m(this, Dt, Je).call(this, r, !0);
}, Dt = new WeakSet(), Je = function(t, e) {
  const r = Array.from(t.children).find(
    (i) => i.className.indexOf("btn-arrow") > -1
  );
  r && (r.classList.remove(e ? "down" : "up"), r.classList.add(e ? "up" : "down"));
};
var Y;
class ui {
  constructor(t = []) {
    h(this, Y, /* @__PURE__ */ new Map());
    t.forEach((e) => this.set(e));
  }
  get(t) {
    return l(this, Y).get(t);
  }
  set(t) {
    if (!(t instanceof W))
      throw new Error(k.INVALID_ARGUMENT);
    l(this, Y).set(t.name, t);
  }
  freeze() {
    l(this, Y).forEach((t) => Object.freeze(t)), Object.freeze(l(this, Y)), Object.freeze(this);
  }
}
Y = new WeakMap();
var J;
class mi {
  constructor() {
    h(this, J, /* @__PURE__ */ new Map());
  }
  get(t) {
    return l(this, J).get(t);
  }
  set(t, e) {
    if (!x(t) || !(e instanceof Object))
      throw new Error(k.INVALID_ARGUMENT);
    l(this, J).set(t, e);
  }
  translate(t, e) {
    var r;
    return ((r = this.get(t)) == null ? void 0 : r[e]) || e;
  }
  freeze() {
    l(this, J).forEach((t) => Object.freeze(t)), Object.freeze(l(this, J)), Object.freeze(this);
  }
}
J = new WeakMap();
var Ot, Bt, jt, St, zt, Vt, Ft, Ut, Pt, Gt, $t, Wt, qt, Zt, Re, ye, De, Oe, Be, je, Se;
class q {
  constructor(t, e = {}) {
    h(this, Ot, void 0);
    h(this, Bt, {});
    h(this, jt, void 0);
    h(this, St, void 0);
    h(this, zt, void 0);
    h(this, Vt, void 0);
    h(this, Ft, void 0);
    h(this, Ut, void 0);
    h(this, Pt, void 0);
    h(this, Gt, void 0);
    h(this, $t, void 0);
    h(this, Wt, void 0);
    h(this, qt, void 0);
    h(this, Zt, void 0);
    h(this, Re, new mi());
    h(this, ye, new di());
    h(this, De, new ni());
    h(this, Oe, new ci());
    h(this, Be, new ui());
    h(this, je, new si());
    h(this, Se, new ai());
    if (!(t instanceof HTMLElement) || !(e instanceof Object))
      throw new Error(k.INVALID_ARGUMENT);
    b(this, Ot, t), b(this, Bt, {
      ...this.constructor.config,
      ...e
    }), b(this, jt, new Rr(this, this.orig.ownerDocument)), b(this, St, this.dom.createElement(s.EDITOR)), b(this, zt, this.dom.createElement(s.MENUBAR, {
      attributes: { role: "toolbar" }
    })), this.element.appendChild(this.menubar), b(this, Vt, new gt(this.menubar)), b(this, Ft, this.dom.createElement(s.TOOLBAR, {
      attributes: { role: "toolbar" }
    })), this.element.appendChild(this.toolbar), b(this, Ut, new gt(this.toolbar)), b(this, Pt, this.dom.createElement(s.FORMATBAR, {
      attributes: { role: "toolbar" }
    })), this.formatbar.hidden = !0, this.element.appendChild(this.formatbar), b(this, Gt, new gt(this.formatbar)), b(this, $t, this.dom.createElement(s.FOCUSBAR, {
      attributes: { role: "toolbar" }
    })), this.focusbar.appendChild(
      this.dom.createElement(s.SPAN, { attributes: { class: "trigger" } })
    ), this.focusbar.appendChild(
      this.dom.createElement(s.DIV, {
        attributes: { class: "trigger-content" }
      })
    ), this.focusbar.hidden = !0, this.element.appendChild(this.focusbar), b(this, Wt, new gt(this.focusbar)), b(this, qt, this.dom.createElement(s.TEXTAREA)), this.element.appendChild(this.textarea), b(this, Zt, new gt(this.textarea));
  }
  get orig() {
    return l(this, Ot);
  }
  get config() {
    return l(this, Bt);
  }
  get dom() {
    return l(this, jt);
  }
  get element() {
    return l(this, St);
  }
  get menubar() {
    return l(this, zt);
  }
  get menubarDispatcher() {
    return l(this, Vt);
  }
  get toolbar() {
    return l(this, Ft);
  }
  get toolbarDispatcher() {
    return l(this, Ut);
  }
  get formatbar() {
    return l(this, Pt);
  }
  get formatbarDispatcher() {
    return l(this, Gt);
  }
  get focusbar() {
    return l(this, $t);
  }
  get focusbarDispatcher() {
    return l(this, Wt);
  }
  get textarea() {
    return l(this, qt);
  }
  get textareaDispatcher() {
    return l(this, Zt);
  }
  get translator() {
    return l(this, Re);
  }
  get tags() {
    return l(this, ye);
  }
  get filters() {
    return l(this, De);
  }
  get dialogs() {
    return l(this, Oe);
  }
  get dropdowns() {
    return l(this, Be);
  }
  get commands() {
    return l(this, je);
  }
  get plugins() {
    return l(this, Se);
  }
  static get defaultPlugins() {
    return {};
  }
  init() {
    var g, p, L;
    const t = this.config, { mode: e, pluginNames: r } = t, i = ((g = this.constructor[ii[e]]) == null ? void 0 : g.plugins) || ((p = this.constructor.defaultPlugins) == null ? void 0 : p.plugins) || [], o = (L = this.constructor.maxPlugins) == null ? void 0 : L.plugins, n = /* @__PURE__ */ new Set();
    (Array.isArray(r) && r.length > 0 ? o.filter((M) => r.includes(M.name)) : i).forEach((M) => {
      const E = (A) => {
        Array.isArray(A == null ? void 0 : A.dependencies) && A.dependencies.forEach(E), n.add(A);
      };
      E(M);
    }), n.forEach((M) => {
      this.plugins.set(new M(this));
    }), this.config.lang && (this.element.lang = this.config.lang), this.plugins.init(), this.toolbarDispatcher.dispatch("init"), this.formatbarDispatcher.dispatch("init"), this.focusbarDispatcher.dispatch("init"), this.textareaDispatcher.dispatch("init");
  }
  freeze() {
    Object.freeze(this.config), this.translator.freeze(), this.tags.freeze(), this.filters.freeze(), this.dialogs.freeze(), this.dropdowns.freeze(), this.commands.freeze(), this.plugins.freeze();
  }
  load() {
    this.orig instanceof HTMLTextAreaElement ? this.setHtml(this.orig.value.replace("/&nbsp;/g", " ")) : this.setHtml(this.orig.innerHTML), Array.from(this.element.children).forEach((t) => {
      t.children.length === 0 && t.localName === s.MENUBAR && t.parentElement.removeChild(t);
    }), this.orig.insertAdjacentElement(I.AFTEREND, this.element), this.orig.hidden = !0, this.textareaDispatcher.dispatch("load");
  }
  destroy() {
    var t;
    (t = this.element.parentElement) == null || t.removeChild(this.element), this.orig.hidden = !1, this.textareaDispatcher.dispatch("destroy");
  }
  getHtml() {
    const t = this.dom.createElement(this.textarea.localName, {
      html: this.textarea.innerHTML
    });
    return this.filters.filter(t), this.textareaDispatcher.dispatch("gethtml", t), t.innerHTML;
  }
  setHtml(t) {
    const e = this.dom.createElement(this.textarea.localName, { html: t });
    this.textareaDispatcher.dispatch("sethtml", e), this.filters.filter(e), this.textarea.innerHTML = e.innerHTML, e.innerHTML || this.textarea.appendChild(this.dom.createElement(s.P));
  }
  save() {
    this.orig instanceof HTMLTextAreaElement ? this.orig.value = this.getHtml() : this.orig.innerHTML = this.getHtml(), this.textareaDispatcher.dispatch("save");
  }
  url(t) {
    const e = this.dom.window.origin || this.dom.window.location.origin, r = this.dom.createElement(s.A, { attributes: { href: t } });
    return e === r.origin ? r.pathname : r.href;
  }
  static create(t, e = {}) {
    const r = new this(t, e);
    return r.init(), r.load(), r.freeze(), r;
  }
}
Ot = new WeakMap(), Bt = new WeakMap(), jt = new WeakMap(), St = new WeakMap(), zt = new WeakMap(), Vt = new WeakMap(), Ft = new WeakMap(), Ut = new WeakMap(), Pt = new WeakMap(), Gt = new WeakMap(), $t = new WeakMap(), Wt = new WeakMap(), qt = new WeakMap(), Zt = new WeakMap(), Re = new WeakMap(), ye = new WeakMap(), De = new WeakMap(), Oe = new WeakMap(), Be = new WeakMap(), je = new WeakMap(), Se = new WeakMap();
var Kt;
class C {
  constructor(t) {
    h(this, Kt, void 0);
    if (!(t instanceof q))
      throw new Error(k.INVALID_ARGUMENT);
    b(this, Kt, t);
  }
  get editor() {
    return l(this, Kt);
  }
  handleEvent(t) {
    $e(this[t.type]) && this[t.type](t);
  }
}
Kt = new WeakMap();
class gi extends C {
  constructor(t) {
    super(t), this.editor.textarea.addEventListener("insert", this);
  }
  insert(t) {
    t.detail.element.hasAttribute("data-alignable") && t.detail.element.addEventListener("keydown", this);
  }
  keydown(t) {
    const e = {
      [d.UP]: S.NONE,
      [d.LEFT]: S.LEFT,
      [d.DOWN]: S.CENTER,
      [d.RIGHT]: S.RIGHT
    };
    t.target === t.currentTarget && _(t, Object.keys(e), { shift: !0 }) && (t.preventDefault(), t.stopPropagation(), t.target.classList.remove(...Object.values(e)), e[t.key] !== S.NONE && t.target.classList.add(e[t.key]));
  }
}
class pi extends C {
  constructor(t) {
    super(t), this.editor.textarea.addEventListener("insert", this);
  }
  insert(t) {
    t.detail.element.hasAttribute("data-deletable") && t.detail.element.addEventListener("keydown", this);
  }
  keydown(t) {
    t.target === t.currentTarget && _(t, d.DEL, { ctrl: !0 }) && (this.editor.dom.delete(t.target), t.preventDefault(), t.stopPropagation());
  }
}
class fi extends C {
  constructor(t) {
    super(t), this.editor.textarea.addEventListener("insert", this);
  }
  insert(t) {
    var e, r, i;
    ((e = t.detail.element) == null ? void 0 : e.contentEditable) === "true" ? t.detail.element.addEventListener("keydown", this) : ((i = (r = t.detail.element) == null ? void 0 : r.parentElement) == null ? void 0 : i.contentEditable) === "true" && t.detail.element.addEventListener("dblclick", this);
  }
  keydown(t) {
    var e, r, i, o;
    if (_(t, d.ENTER, { shift: !0 }) && !this.editor.tags.allowed(t.target, s.BR))
      t.preventDefault(), t.stopPropagation();
    else if (_(t, d.ENTER)) {
      t.preventDefault(), t.stopPropagation();
      const n = (e = this.editor.tags.get(t.target)) == null ? void 0 : e.enter;
      n && (t.target.textContent.trim() || !t.target.hasAttribute("data-deletable") ? (r = this.editor.dom.closest(t.target, n)) == null || r.insertAdjacentElement(I.AFTEREND, this.editor.dom.createElement(n)) : t.target instanceof HTMLParagraphElement || ((i = this.editor.dom.closest(t.target, s.P)) == null || i.insertAdjacentElement(I.AFTEREND, this.editor.dom.createElement(s.P)), t.target.parentElement.removeChild(t.target)));
    } else
      _(t, d.BACKSPACE) && !t.target.textContent && t.target.hasAttribute("data-deletable") ? (this.editor.dom.delete(t.target), t.preventDefault(), t.stopPropagation()) : /^[A-Z]$/.test(t.key) && _(t, t.key, { alt: !0, shift: !0 }) && (t.preventDefault(), t.stopPropagation(), (o = this.editor.formatbar.querySelector(`${s.BUTTON}[data-key=${t.key.toLowerCase()}]`)) == null || o.click());
  }
  dblclick(t) {
    var e;
    this.editor.dom.selectContents(t.target), (e = this.editor.commands.find(t.target.localName)) == null || e.execute();
  }
}
class wi extends C {
  constructor(t) {
    super(t), this.editor.textarea.addEventListener("insert", this);
  }
  insert(t) {
    t.detail.element.hasAttribute("data-focusable") && t.detail.element.focus();
  }
}
class qe extends C {
  insertbutton(t) {
    t.detail.element.getAttribute("data-command") && t.detail.element.addEventListener("click", this);
  }
  click(t) {
    const e = t.target.localName === "button" ? t.target : t.currentTarget, r = e == null ? void 0 : e.getAttribute("data-command");
    r && this.editor.commands.execute(r, e);
  }
  keydown(t) {
    if (_(t, [d.LEFT, d.RIGHT, d.HOME, d.END])) {
      const e = t.target.previousElementSibling, r = t.target.nextElementSibling, i = t.target.parentElement.firstElementChild, o = t.target.parentElement.lastElementChild, n = t.target === i, c = t.target === o;
      t.key === d.LEFT && !n ? e.focus() : t.key === d.RIGHT && !c ? r.focus() : t.key === d.HOME || t.key === d.RIGHT && c ? i.focus() : (t.key === d.END || t.key === d.LEFT && n) && o.focus(), t.preventDefault(), t.stopPropagation();
    }
  }
}
var Qt, tr, Xt, er;
class bi extends qe {
  constructor(e) {
    super(e);
    h(this, Qt);
    h(this, Xt);
    const { focusbar: r, textarea: i } = this.editor;
    r.addEventListener("insertbutton", this), i.addEventListener("focusin", this), i.addEventListener("focusout", this), this.editor.dom.document.addEventListener("selectionchange", this);
    const o = Array.from(r.children).find((c) => c.className === "trigger"), n = Array.from(r.children).find(
      (c) => c.className === "trigger-content"
    );
    o.addEventListener("click", (c) => {
      n.hidden = !n.hidden;
    });
  }
  insertbutton(e) {
    super.insertbutton(e), e.detail.element.getAttribute("data-command") && e.detail.element.addEventListener("mousedown", this);
  }
  mousedown(e) {
    e.preventDefault(), e.stopPropagation();
  }
  focusin(e) {
    if (e.target instanceof HTMLElement && e.target.hasAttribute("data-focusable")) {
      const r = e.target, i = Array.from(this.editor.focusbar.children).find(
        (o) => o.className === "trigger-content"
      );
      i.hidden = !0, m(this, Qt, tr).call(this, r);
    }
  }
  focusout(e) {
    m(this, Xt, er).call(this);
  }
  selectionchange() {
    const e = this.editor.dom.getSelection(), r = this.editor.dom.getActiveElement();
    !e.isCollapsed || !r ? m(this, Xt, er).call(this) : r instanceof HTMLElement && r.hasAttribute("data-focusable") && m(this, Qt, tr).call(this, r);
  }
}
Qt = new WeakSet(), tr = function(e) {
  const { focusbar: r, textarea: i } = this.editor;
  if (!r.children.length)
    return;
  Object.keys(e.dataset).forEach(
    (E) => r.dataset[E] = e.dataset[E]
  ), r.dataset.tag = e.localName, r.hidden = !1;
  const { x: o, y: n } = e.getBoundingClientRect(), { x: c, y: g } = i.getBoundingClientRect(), p = o - c + r.clientWidth - i.clientWidth, L = n - g - e.scrollTop + i.offsetTop;
  let M = r.clientWidth < i.clientWidth ? o - c : 0;
  M > 0 && p > 0 && (M = M > p ? (M - p) / 2 : 0), e.localName === "li" && (M -= 16), r.style.left = `${M - 20}px`, r.style.top = `${L}px`;
}, Xt = new WeakSet(), er = function() {
  const { focusbar: e } = this.editor;
  e.hidden = !0, e.removeAttribute("style"), Object.keys(e.dataset).forEach((r) => delete e.dataset[r]);
};
var ze, Fr, Ve, Ur;
class ki extends qe {
  constructor(e) {
    super(e);
    h(this, ze);
    h(this, Ve);
    this.editor.formatbar.addEventListener("insertbutton", this), this.editor.dom.document.addEventListener("selectionchange", this);
  }
  selectionchange() {
    const e = this.editor.dom.getSelectedEditable(), r = this.editor.dom.getSelection();
    e && !r.isCollapsed && this.editor.tags.allowed(e, u.FORMAT, !0) ? m(this, ze, Fr).call(this, this.editor.formatbar, e) : m(this, Ve, Ur).call(this, this.editor.formatbar);
  }
}
ze = new WeakSet(), Fr = function(e, r) {
  if (!(e instanceof HTMLElement) || !(r instanceof HTMLElement))
    throw new Error(k.INVALID_ARGUMENT);
  e.hidden = !1;
  const { x: i, y: o } = r.getBoundingClientRect(), { x: n, y: c } = this.editor.textarea.getBoundingClientRect(), g = i - n + e.clientWidth - this.editor.textarea.clientWidth, p = o - c - r.scrollTop + this.editor.textarea.offsetTop - e.clientHeight;
  let L = e.clientWidth < this.editor.textarea.clientWidth ? i - n : 0;
  L > 0 && g > 0 && (L = L > g ? (L - g) / 2 : 0), e.style.left = `${L}px`, e.style.top = `${p - 4}px`;
}, Ve = new WeakSet(), Ur = function(e) {
  e.hidden = !0, e.removeAttribute("style");
};
var Fe, Pr;
class Ei extends C {
  constructor(e) {
    super(e);
    h(this, Fe);
    this.editor.textarea.addEventListener("insert", this);
  }
  insert(e) {
    e.detail.element.hasAttribute("data-navigable") && (e.detail.element.tabIndex = 0, e.detail.element.addEventListener("keydown", this));
  }
  keydown(e) {
    if (e.target === e.currentTarget && _(e, [d.UP, d.DOWN, d.HOME, d.END]) && m(this, Fe, Pr).call(this, e.target)) {
      const r = e.target.previousElementSibling, i = e.target.nextElementSibling, o = e.target.parentElement.firstElementChild, n = e.target.parentElement.lastElementChild, c = e.target === o, g = e.target === n;
      e.key === d.UP && !c && r.hasAttribute("data-navigable") ? r.focus() : e.key === d.DOWN && !g && i.hasAttribute("data-navigable") ? i.focus() : (e.key === d.HOME || e.key === d.DOWN && g) && o.hasAttribute("data-navigable") ? o.focus() : (e.key === d.END || e.key === d.UP && c) && n.hasAttribute("data-navigable") && n.focus(), e.preventDefault(), e.stopPropagation();
    }
  }
}
Fe = new WeakSet(), Pr = function(e) {
  if (e.contentEditable !== "true")
    return !0;
  const r = this.editor.dom.getSelection(), i = this.editor.dom.getSelectedEditable(), o = this.editor.dom.getSelectedElement();
  return r.isCollapsed && r.anchorOffset === 0 && [i, e.firstChild].includes(o);
};
class Li extends C {
  constructor(t) {
    super(t), this.editor.textarea.addEventListener("insert", this);
  }
  insert(t) {
    t.detail.element instanceof HTMLSlotElement ? t.detail.element.addEventListener("keydown", this) : t.detail.element.hasAttribute("data-slotable") && !t.detail.element.querySelector(":scope > " + s.SLOT) && t.detail.element.appendChild(this.editor.dom.createElement(s.SLOT));
  }
  keydown(t) {
    !_(t, d.TAB) && !_(t, d.TAB, { shift: !0 }) && (t.preventDefault(), t.stopPropagation());
  }
}
var Yt, rr, Jt, ir;
class Ti extends C {
  constructor(e) {
    super(e);
    h(this, Yt);
    h(this, Jt);
    this.editor.textarea.addEventListener("insert", this);
  }
  insert(e) {
    e.detail.element.hasAttribute("data-sortable") && (e.detail.element.addEventListener("keydown", this), e.detail.element.addEventListener("pointerdown", this), e.detail.element.addEventListener("pointermove", this), e.detail.element.addEventListener("pointerup", this));
  }
  keydown(e) {
    const r = {
      [d.HOME]: v.FIRST,
      [d.UP]: v.PREV,
      [d.DOWN]: v.NEXT,
      [d.END]: v.LAST
    };
    e.target === e.currentTarget && _(e, Object.keys(r), { ctrl: !0 }) && (this.editor.dom.sort(e.target, r[e.key]), e.preventDefault(), e.stopPropagation());
  }
  pointerdown(e) {
    const r = e.target.closest("[data-sortable]");
    r && this.editor.dom.contains(r) && (r.setAttribute("data-sort", ""), r.setPointerCapture(e.pointerId));
  }
  pointermove(e) {
    const r = e.target.closest("[data-sortable][data-sort]"), i = this.editor.dom.document.elementFromPoint(e.x, e.y);
    m(this, Yt, rr).call(this), r && this.editor.dom.contains(r) && m(this, Jt, ir).call(this, r, i) && i.setAttribute("data-sortover", "");
  }
  pointerup(e) {
    const r = e.target.closest("[data-sortable][data-sort]");
    if (r && this.editor.dom.contains(r)) {
      const i = this.editor.dom.document.elementFromPoint(e.x, e.y);
      m(this, Yt, rr).call(this), r.removeAttribute("data-sort"), r.releasePointerCapture(e.pointerId), m(this, Jt, ir).call(this, r, i) && i.insertAdjacentElement(I.BEFOREBEGIN, r);
    }
  }
}
Yt = new WeakSet(), rr = function() {
  this.editor.textarea.querySelectorAll("[data-sortover]").forEach((e) => e.removeAttribute("data-sortover"));
}, Jt = new WeakSet(), ir = function(e, r) {
  return e instanceof HTMLElement && r instanceof HTMLElement && this.editor.dom.contains(r) && ![this.editor.textarea, e].includes(r) && r.hasAttribute("data-sortable") && (e.parentElement === r.parentElement || this.editor.dom.arbitrary(e.parentElement) && this.editor.dom.arbitrary(r.parentElement)) && this.editor.tags.allowed(r.parentElement, e);
};
class xi extends C {
  constructor(t) {
    super(t), this.editor.textarea.addEventListener("insert", this);
  }
  insert(t) {
    const e = this.editor.tags.get(t.detail.element);
    e && (e.editable && (t.detail.element.contentEditable = "true"), [
      "alignable",
      "arbitrary",
      "deletable",
      "focusable",
      "navigable",
      "slotable",
      "sortable"
    ].forEach((r) => {
      e[r] && (t.detail.element.dataset[r] = "");
    }));
  }
}
class Mi extends C {
  constructor(t) {
    super(t), this.editor.dom.document.addEventListener("selectionchange", this), this.editor.textarea.addEventListener("input", this.onInputChange.bind(this)), this.editor.textarea.addEventListener("delete", this);
  }
  onInputChange(t) {
    var r;
    console.log("onInputChange", t);
    const { onValueChange: e } = this.editor.config;
    typeof e == "function" && e((r = t == null ? void 0 : t.currentTarget) == null ? void 0 : r.innerHTML, t);
  }
  selectionchange() {
    const t = this.editor.dom.getSelectedElement();
    t && (t.contentEditable === "true" || t.parentElement.contentEditable === "true") && this.activeBarItem();
  }
  delete(t) {
    var r, i;
    const { onValueChange: e } = this.editor.config;
    typeof e == "function" && e((r = t == null ? void 0 : t.currentTarget) == null ? void 0 : r.innerHTML, t), ((i = t == null ? void 0 : t.currentTarget) == null ? void 0 : i.innerHTML) === "" && this.editor.textarea.appendChild(this.editor.dom.createElement(s.P));
  }
  keydown(t) {
    if (_(t, [d.LEFT, d.RIGHT, d.HOME, d.END])) {
      const e = t.target.previousElementSibling, r = t.target.nextElementSibling, i = t.target.parentElement.firstElementChild, o = t.target.parentElement.lastElementChild, n = t.target === i, c = t.target === o;
      t.key === d.LEFT && !n ? e.focus() : t.key === d.RIGHT && !c ? r.focus() : t.key === d.HOME || t.key === d.RIGHT && c ? i.focus() : (t.key === d.END || t.key === d.LEFT && n) && o.focus(), t.preventDefault(), t.stopPropagation();
    }
  }
  getCommandNameByTagName(t) {
    const e = this.editor.tags.get(t);
    return e == null ? void 0 : e.command;
  }
  activeBarItem() {
    const t = this.editor.dom.getSelection();
    if (t.type !== "None") {
      let r = t.getRangeAt(0).commonAncestorContainer;
      r.nodeType != 1 && (r = r.parentNode);
      const i = this.editor.formatbar.children, o = this.getCommandNameByTagName(r.localName);
      Array.prototype.forEach.call(i, (n) => {
        const c = n.dataset.command, g = r.dataset.command || o;
        r.localName !== s.P && c === g ? n.setAttribute("data-active", !0) : n.removeAttribute("data-active");
      });
    }
  }
}
class Ci extends qe {
  constructor(t) {
    super(t), this.editor.toolbar.addEventListener("insertbutton", this);
  }
  insertbutton(t) {
    super.insertbutton(t), t.detail.element.tabIndex = t.detail.element === this.editor.toolbar.firstElementChild ? 0 : -1, t.detail.element.addEventListener("keydown", this);
  }
}
class Ai extends qe {
  constructor(t) {
    super(t), this.editor.menubar.addEventListener("insertbutton", this);
  }
  insertbutton(t) {
    t.detail.element.addEventListener("click", this);
  }
  click(t) {
    const e = t.target.localName === "button" ? t.target : t.currentTarget, r = e == null ? void 0 : e.getAttribute("data-command");
    r && this.editor.commands.execute(r, e);
  }
}
var Ue, Gr, te, or;
class Ii extends it {
  constructor() {
    super(...arguments);
    h(this, Ue);
    h(this, te);
  }
  filter(e) {
    const r = this.editor.tags.get(e), i = this.editor.tags.allowed(e, s.P), o = r.editable || r.group === u.FORMAT;
    let n = [];
    const c = (g = null) => {
      i && n.length > 0 && (e.insertBefore(this.editor.dom.createElement(s.P, { html: n.join(" ") }), g), n = []);
    };
    Array.from(e.childNodes).forEach((g) => {
      const p = g.textContent.trim();
      if (g instanceof HTMLElement) {
        const L = m(this, Ue, Gr).call(this, g), M = this.editor.tags.get(L);
        if (M && this.editor.tags.allowed(e, L))
          c(L), m(this, te, or).call(this, L, M);
        else if (M && M.group === u.FORMAT && i) {
          const E = m(this, te, or).call(this, L, M);
          E && (n.push(E.outerHTML), e.removeChild(E));
        } else
          !o && p && i ? (n.push(p), e.removeChild(L)) : o && p ? e.replaceChild(this.editor.dom.createText(p), L) : e.removeChild(L);
      } else
        g instanceof Text ? (!o && p && i && n.push(p), (!o || !p) && e.removeChild(g)) : g instanceof Node && e.removeChild(g);
    }), c();
  }
}
Ue = new WeakSet(), Gr = function(e) {
  const r = this.editor.config.filter[e.localName];
  if (!r)
    return e;
  const i = this.editor.dom.createElement(r, {
    html: e.innerHTML
  });
  return e.parentElement.replaceChild(i, e), i;
}, te = new WeakSet(), or = function(e, r) {
  var i;
  if (Array.from(e.attributes).forEach(
    (o) => !r.attributes.includes(o.name) && e.removeAttribute(o.name)
  ), e.hasChildNodes() && this.editor.filters.filter(e), e.hasChildNodes() || r.empty)
    return e;
  (i = e.parentElement) == null || i.removeChild(e);
};
class vi extends HTMLElement {
  get open() {
    return this.getAttribute("open") === "true";
  }
  set open(t) {
    typeof t == "boolean" ? this.setAttribute("open", t) : this.removeAttribute("open");
  }
  constructor() {
    super(), this.addEventListener("keydown", (t) => t.key === d.ESC && this.close()), this.addEventListener("click", (t) => t.target === this && this.close());
  }
  connectedCallback() {
    this.setAttribute("role", "dialog"), this.tabIndex = -1, this.focus();
  }
  show() {
    this.open = !0, this.dispatchEvent(
      new CustomEvent("show", {
        detail: {
          element: this,
          target: this
        }
      })
    );
  }
  close() {
    this.open = !1, this.dispatchEvent(new CustomEvent("close", { detail: { element: this, target: this } }));
  }
}
class _i extends HTMLElement {
  get open() {
    return this.getAttribute("open") === "true";
  }
  set open(t) {
    typeof t == "boolean" ? this.setAttribute("open", t) : this.removeAttribute("open");
  }
  constructor() {
    super(), this.addEventListener("keydown", (t) => t.key === d.ESC && this.close()), document.addEventListener("click", this.clickedOutside.bind(this));
  }
  connectedCallback() {
    this.setAttribute("role", "dropdown"), this.tabIndex = -1, this.focus();
  }
  show(t, e) {
    this.open = !1, this.dispatchEvent(
      new CustomEvent("show", {
        detail: {
          element: this,
          target: this
        }
      })
    ), this.classList.add("dropdown-animate-in");
    const r = e.getBoundingClientRect(), i = t.getBoundingClientRect(), { left: o, top: n } = r, { left: c, top: g, width: p, height: L } = i;
    this.style.left = `${c - o - p / 2}px`, this.style.top = `${g - n + L}px`, e.appendChild(this);
    const M = this.getBoundingClientRect(), { width: E, left: A } = M, j = c - o + p / 2 - E / 2;
    if (this.style.left = `${A > 0 ? j : 0 - o + 1}px`, A <= 0) {
      const N = Array.from(this.children).find((mt) => mt.role === "arrow");
      N.style.left = `${j - A}px`;
    }
    this.open = !0, setTimeout(() => {
      this.classList.remove("dropdown-animate-in");
    }, 300);
  }
  close() {
    this.open = !1, this.dispatchEvent(new CustomEvent("close", { detail: { element: this, target: this } }));
  }
  clickedOutside(t) {
    var r, i;
    const e = document.getElementsByTagName(s.DROPDOWN);
    if (e.length > 0) {
      const o = e == null ? void 0 : e[0], n = (i = (r = e == null ? void 0 : e[0]) == null ? void 0 : r.dataset) == null ? void 0 : i.command;
      let c = !1;
      const g = (p) => {
        if (p) {
          if (p.localName === "button" && p.dataset.command === n)
            return c = !0, !0;
          g(p.parentElement);
        }
        return c;
      };
      o.contains(t.target) || g(t.target) || this.close();
    }
  }
}
const Hi = {
  "zh-cn": {
    Alt: "Alt",
    Shift: "Shift"
  }
};
class w extends f {
  static get name() {
    return "base";
  }
  init() {
    this._i18n(Hi), this.editor.dom.registerElement(s.DIALOG, vi), this.editor.dom.registerElement(s.DROPDOWN, _i), this._tag({
      name: s.TEXTAREA,
      group: u.TEXTAREA,
      children: [
        u.AUDIO,
        u.BLOCK,
        u.CONTAINER,
        u.FIGURE,
        u.HEADING,
        u.IFRAME,
        u.IMAGE,
        u.LIST,
        u.PARAGRAPH,
        u.PREFORMAT,
        u.QUOTE,
        u.RULE,
        u.TABLE,
        u.VIDEO
      ]
    }), this._tag({
      name: s.SLOT,
      group: u.SLOT,
      editable: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0
    }), new xi(this.editor), new Ai(this.editor), new Ci(this.editor), new ki(this.editor), new bi(this.editor), new fi(this.editor), new pi(this.editor), new Ei(this.editor), new Ti(this.editor), new gi(this.editor), new Li(this.editor), new Mi(this.editor), this.editor.filters.add(new Ii(this.editor)), oi(() => new wi(this.editor));
  }
}
class Ni extends it {
  filter(t) {
    if (t instanceof HTMLPreElement) {
      t.outerHTML = t.outerHTML.replace(/(<br\s*\/?>)/gi, `
`);
      return;
    }
    t.innerHTML = t.innerHTML.replace(/^\s*(<br\s*\/?>\s*)+/gi, "").replace(/\s*(<br\s*\/?>\s*)+$/gi, ""), t instanceof HTMLParagraphElement ? t.outerHTML = t.outerHTML.replace(/\s*(<br\s*\/?>\s*){2,}/gi, "</p><p>") : t.innerHTML = t.innerHTML.replace(/\s*(<br\s*\/?>\s*){2,}/gi, "<br>");
  }
}
class ce extends f {
  static get name() {
    return "break";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._tag({
      name: s.BR,
      group: u.BREAK,
      command: this.constructor.name,
      attributes: ["class", "data-command"],
      empty: !0
    }), this.editor.filters.add(new Ni(this.editor));
  }
}
var ee, sr;
class Ri extends C {
  constructor(e) {
    super(e);
    h(this, ee);
    this.editor.textarea.addEventListener("sethtml", this), this.editor.textarea.addEventListener("insertp", this);
  }
  sethtml(e) {
    Array.from(e.detail.element.getElementsByTagName(s.P)).forEach(
      (r) => m(this, ee, sr).call(this, r)
    );
  }
  insertp(e) {
    m(this, ee, sr).call(this, e.detail.element);
  }
  paste(e) {
    this.editor.dom.window.setTimeout(() => this.editor.filters.filter(e.target));
  }
}
ee = new WeakSet(), sr = function(e) {
  e.addEventListener("paste", this);
};
const yi = {
  "zh-cn": {
    Paragraph: "\u6B63\u6587"
  }
};
class Ar extends f {
  static get name() {
    return "paragraph";
  }
  static get dependencies() {
    return [w, ce];
  }
  init() {
    this._i18n(yi), this._tag({
      name: s.P,
      group: u.PARAGRAPH,
      command: this.constructor.name,
      attributes: ["class", "data-command"],
      children: [u.BREAK, u.FORMAT],
      editable: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0,
      deletable: !0,
      enter: s.P
    }), new Ri(this.editor), this._command(s.P), this._toolbar({
      label: this._("Paragraph"),
      command: this.constructor.name
    });
  }
}
class Di extends W {
  constructor(t) {
    super(t, fe.name);
  }
  _prepareContent() {
    fe.headingItems.forEach((t) => {
      const e = s[t], r = s[t], i = this._(t), o = s[t], n = this.dropdownContent.createButton({
        label: e,
        command: r,
        title: i,
        key: o
      });
      this.dropdownContent.addMenuItem(n);
    });
  }
  _readyContent(t, e, r, i) {
    t.addEventListener("click", (o) => this._onClick(o, r, i));
  }
  _onClick(t, e, r) {
    const i = (n) => n.localName === "button" ? n : n != null && n.parentElement ? i(n == null ? void 0 : n.parentElement) : void 0, o = i(t.target);
    if (o) {
      const n = o == null ? void 0 : o.getAttribute("data-command");
      n && (e({ "data-command": n }), typeof r == "function" && r());
    }
  }
}
class Oi extends y {
  constructor(t, e, r) {
    super(t, e, r);
  }
  insert(t) {
    const e = t["data-command"];
    if (e && Object.values(s).includes(e)) {
      const r = this.editor.dom.createElement(e, {
        attributes: {
          class: e,
          "data-command": e
        }
      });
      this.editor.dom.insert(r);
    }
  }
}
const Bi = {
  "zh-cn": {
    Heading: "\u6807\u9898"
  }
};
class fe extends f {
  static get name() {
    return "heading";
  }
  static get dependencies() {
    return [w];
  }
  static get headingItems() {
    return ["H1", "H2", "H3", "H4", "H5", "H6"];
  }
  init() {
    this._i18n(Bi), this._toolbar({
      label: this._("Heading"),
      command: this.constructor.name,
      arrowDown: O["arrow-down"],
      uuid: rt()
    });
    const { headingItems: t } = this.constructor;
    t.forEach((e) => {
      this._tag({
        name: s[e],
        group: u.HEADING,
        command: s[e],
        attributes: ["class", "data-command"],
        deletable: !0,
        editable: !0,
        focusable: !0,
        sortable: !0,
        enter: s.P
      });
    }), this.editor.dropdowns.set(new Di(this.editor, t)), this.editor.commands.set(new Oi(this.editor, u.HEADING));
  }
}
class ji extends W {
  constructor(t) {
    super(t, we.name);
  }
  _prepareContent() {
    we.sizeItems.forEach((t) => {
      const e = t, r = t, i = this._(t), o = t, n = this.dropdownContent.createButton({
        label: e,
        command: r,
        title: i,
        key: o
      });
      this.dropdownContent.addMenuItem(n);
    });
  }
  _readyContent(t, e, r, i) {
    const o = this.editor.dom.getRange();
    t.addEventListener("click", (n) => {
      o && this.editor.dom.setRange(o), this._onClick(n, r, i);
    });
  }
  _onClick(t, e, r) {
    var o, n;
    const i = (n = (o = t.target) == null ? void 0 : o.dataset) == null ? void 0 : n.command;
    e({ style: `font-size: ${i}` }), r();
  }
}
class Si extends y {
  constructor(t, e) {
    super(t, e);
  }
  insert(t) {
    const e = this.editor.dom.getRange();
    if (e) {
      const i = e.toString();
      e.deleteContents();
      const o = this.editor.dom.createElement(s.SPAN, {
        attributes: t
      });
      o.textContent = i, e.insertNode(o);
    }
    const r = this.editor.dom.getSelectedEditable();
    r == null || r.normalize();
  }
}
const zi = {
  "zh-cn": {
    FontSize: "\u5B57\u53F7"
  }
};
class we extends f {
  static get name() {
    return "fontSize";
  }
  static get dependencies() {
    return [w];
  }
  static get sizeItems() {
    return [
      "12px",
      "13px",
      "14px",
      "15px",
      "16px",
      "18px",
      "22px",
      "24px",
      "28px",
      "32px",
      "36px",
      "40px",
      "42px",
      "48px"
    ];
  }
  init() {
    this._i18n(zi), this._toolbar({
      label: this._("FontSize"),
      command: this.constructor.name,
      arrowDown: O["arrow-down"],
      uuid: rt()
    }), this.editor.dropdowns.set(new ji(this.editor)), this.editor.commands.set(new Si(this.editor, u.FONTSIZE));
  }
}
var re, nr;
class Vi extends C {
  constructor(e) {
    super(e);
    h(this, re);
    this.editor.textarea.addEventListener("sethtml", this), this.editor.textarea.addEventListener("insertli", this), this.editor.textarea.addEventListener("deleteli", this), this.editor.textarea.addEventListener("insertol", this), this.editor.textarea.addEventListener("insertul", this);
  }
  sethtml(e) {
    Array.from(e.detail.element.getElementsByTagName(s.LI)).forEach(
      (r) => m(this, re, nr).call(this, r)
    );
  }
  insertli(e) {
    m(this, re, nr).call(this, e.detail.element);
  }
  deleteli(e) {
    e.detail.target.children.length === 0 && e.detail.target.parentElement.removeChild(e.detail.target);
  }
  insertol(e) {
    e.detail.element.children.length === 0 && e.detail.element.appendChild(this.editor.dom.createElement(s.LI));
  }
  insertul(e) {
    this.insertol(e);
  }
}
re = new WeakSet(), nr = function(e) {
  !(e.parentElement instanceof HTMLOListElement) && !(e.parentElement instanceof HTMLUListElement) && this.editor.dom.wrap(e, s.UL);
};
class $r extends f {
  static get name() {
    return "list";
  }
  static get dependencies() {
    return [w, ce];
  }
  init() {
    this._tag({
      name: s.LI,
      group: u.LISTITEM,
      command: this.constructor.name,
      attributes: ["class", "data-command"],
      children: [u.BREAK, u.FORMAT],
      deletable: !0,
      editable: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0,
      enter: s.LI
    }), new Vi(this.editor);
  }
}
const Fi = {
  "zh-cn": {
    "Unordered List": "\u65E0\u5E8F\u5217\u8868"
  }
};
class Ir extends f {
  static get name() {
    return "unorderedList";
  }
  static get dependencies() {
    return [w, $r];
  }
  init() {
    this._i18n(Fi), this._tag({
      name: s.UL,
      group: u.LIST,
      command: this.constructor.name,
      attributes: ["class", "data-command"],
      children: [u.LISTITEM],
      arbitrary: !0,
      deletable: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0
    }), this._command(s.UL), this._toolbar({
      label: this._("Unordered List"),
      command: this.constructor.name
    });
  }
}
const Ui = {
  "zh-cn": {
    "Ordered List": "\u6709\u5E8F\u5217\u8868"
  }
};
class vr extends f {
  static get name() {
    return "orderedList";
  }
  static get dependencies() {
    return [w, $r];
  }
  init() {
    this._i18n(Ui), this._tag({
      name: s.OL,
      group: u.LIST,
      command: this.constructor.name,
      attributes: ["class", "data-command"],
      children: [u.LISTITEM],
      arbitrary: !0,
      deletable: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0
    }), this._command(s.OL), this._toolbar({
      label: this._("Ordered List"),
      command: this.constructor.name
    });
  }
}
class Pi extends y {
  constructor(t, e) {
    super(t, e);
  }
  insert(t) {
    const e = t["data-command"], r = this.editor.dom.getSelectedElement();
    e && r && (r.style.textIndent = e === Xe.RIGHT ? "2rem" : 0);
  }
}
var lt;
class Gi extends W {
  constructor(e, r) {
    super(e, ar.name);
    h(this, lt, void 0);
    b(this, lt, r);
  }
  _prepareContent() {
    Object.keys(l(this, lt)).forEach((e) => {
      const r = `indent-${e}`, { label: i, key: o } = l(this, lt)[e], n = this._(i), c = this.dropdownContent.createButton({
        label: i,
        command: r,
        title: n,
        key: o,
        tip: !0
      });
      this.dropdownContent.addMenuItem(c);
    });
  }
  _readyContent(e, r, i, o) {
    const n = this.editor.dom.getRange();
    e.addEventListener("click", (c) => {
      n && this.editor.dom.setRange(n), this._onClick(c, i, o);
    });
  }
  _onClick(e, r, i) {
    const o = (c) => c.localName === "button" ? c : c != null && c.parentElement ? o(c == null ? void 0 : c.parentElement) : void 0, n = o(e.target);
    if (n) {
      const c = n == null ? void 0 : n.getAttribute("data-command");
      c && (r({ "data-command": c.split("-")[1] }), typeof i == "function" && i());
    }
  }
}
lt = new WeakMap();
const $i = {
  "zh-cn": {
    Indent: "\u7F29\u8FDB",
    "Indent left": "Indent left",
    "Indent right": "Indent right"
  }
};
class ar extends f {
  static get name() {
    return "indent";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n($i), this._toolbar({
      label: this._("Indent"),
      command: this.constructor.name,
      arrowDown: O["arrow-down"],
      uuid: rt()
    });
    const t = {
      [Xe.RIGHT]: {
        label: this._("Indent right"),
        key: `align-${d.RIGHT}`
      },
      [Xe.LEFT]: {
        label: this._("Indent left"),
        key: `align-${d.LEFT}`
      }
    };
    this.editor.dropdowns.set(new Gi(this.editor, t)), this.editor.commands.set(new Pi(this.editor, u.INDENT));
  }
}
class Wi extends y {
  constructor(t, e) {
    super(t, e);
  }
  insert(t) {
    const e = t["data-command"], r = this.editor.dom.getSelectedElement();
    e && r && (r.style.textAlign = e === "none" ? "" : e);
  }
}
var ct;
class qi extends W {
  constructor(e, r) {
    super(e, dr.name);
    h(this, ct, void 0);
    b(this, ct, r);
  }
  _prepareContent() {
    Object.keys(l(this, ct)).forEach((e) => {
      const r = `align-${e}`, { label: i, key: o } = l(this, ct)[e], n = this._(i), c = this.dropdownContent.createButton({
        label: i,
        command: r,
        title: n,
        key: o,
        tip: !0
      });
      this.dropdownContent.addMenuItem(c);
    });
  }
  _readyContent(e, r, i, o) {
    const n = this.editor.dom.getRange();
    e.addEventListener("click", (c) => {
      n && this.editor.dom.setRange(n), this._onClick(c, i, o);
    });
  }
  _onClick(e, r, i) {
    const o = (c) => c.localName === "button" ? c : c != null && c.parentElement ? o(c == null ? void 0 : c.parentElement) : void 0, n = o(e.target);
    if (n) {
      const c = n == null ? void 0 : n.getAttribute("data-command");
      c && (r({ "data-command": c.split("-")[1] }), typeof i == "function" && i());
    }
  }
}
ct = new WeakMap();
const Zi = {
  "zh-cn": {
    Align: "\u5BF9\u9F50\u65B9\u5F0F",
    "Align center": "Align center",
    "Align left": "Align left",
    "Align right": "Align right",
    "No alignment": "No alignment"
  }
};
class dr extends f {
  static get name() {
    return "align";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Zi), this._toolbar({
      label: this._("Align"),
      command: this.constructor.name,
      arrowDown: O["arrow-down"],
      uuid: rt()
    });
    const t = {
      [S.NONE]: {
        label: this._("No alignment"),
        key: `${d.UP} + ${d.DOWN}`
      },
      [S.LEFT]: { label: this._("Align left"), key: d.LEFT },
      [S.CENTER]: {
        label: this._("Align center"),
        key: `${d.LEFT} + ${d.RIGHT}`
      },
      [S.RIGHT]: { label: this._("Align right"), key: d.RIGHT }
    };
    this.editor.dropdowns.set(new qi(this.editor, t)), this.editor.commands.set(new Wi(this.editor, u.ALIGN));
  }
}
class Ki extends W {
  constructor(t) {
    super(t, be.name);
  }
  _prepareContent() {
    be.heightItems.forEach((t) => {
      const e = t, r = t, i = this._(t), o = t, n = this.dropdownContent.createButton({
        label: e,
        command: r,
        title: i,
        key: o
      });
      this.dropdownContent.addMenuItem(n);
    });
  }
  _readyContent(t, e, r, i) {
    const o = this.editor.dom.getRange();
    t.addEventListener("click", (n) => {
      o && this.editor.dom.setRange(o), this._onClick(n, r, i);
    });
  }
  _onClick(t, e, r) {
    var o, n;
    const i = (n = (o = t.target) == null ? void 0 : o.dataset) == null ? void 0 : n.command;
    e({ style: `line-height: ${i}` }), r();
  }
}
class Qi extends y {
  constructor(t, e) {
    super(t, e);
  }
  insert(t) {
    const e = this.editor.dom.getRange();
    if (e) {
      const i = e.toString();
      e.deleteContents();
      const o = this.editor.dom.createElement(s.SPAN, {
        attributes: t
      });
      o.textContent = i, e.insertNode(o);
    }
    const r = this.editor.dom.getSelectedEditable();
    r == null || r.normalize();
  }
}
const Xi = {
  "zh-cn": {
    LineHeight: "\u884C\u9AD8"
  }
};
class be extends f {
  static get name() {
    return "lineHeight";
  }
  static get dependencies() {
    return [w];
  }
  static get heightItems() {
    return ["1", "1.15", "1.5", "2", "2.5", "3"];
  }
  init() {
    this._i18n(Xi), this._toolbar({
      label: this._("LineHeight"),
      command: this.constructor.name,
      arrowDown: O["arrow-down"],
      uuid: rt()
    }), this.editor.dropdowns.set(new Ki(this.editor)), this.editor.commands.set(new Qi(this.editor, u.LINEHEIGHT));
  }
}
class Yi extends it {
  filter(t) {
    t instanceof HTMLElement && t.classList.contains(lr.name) && t.querySelector(":scope > " + s.BLOCKQUOTE) && (t.insertAdjacentElement(
      I.BEFOREBEGIN,
      t.querySelector(":scope > " + s.BLOCKQUOTE)
    ), t.parentElement.removeChild(t));
  }
}
const Ji = {
  "zh-cn": {
    Blockquote: "\u5F15\u7528"
  }
};
class lr extends f {
  static get name() {
    return "blockquote";
  }
  static get dependencies() {
    return [w, ce];
  }
  init() {
    this._i18n(Ji), this._tag({
      name: s.BLOCKQUOTE,
      group: u.QUOTE,
      command: this.constructor.name,
      attributes: ["class", "data-command"],
      children: [u.BREAK, u.FORMAT],
      editable: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0,
      deletable: !0,
      enter: s.P
    }), this._command(s.BLOCKQUOTE), this._toolbar({
      label: this._("Blockquote"),
      command: this.constructor.name
    }), this.editor.filters.add(new Yi(this.editor));
  }
}
class to extends W {
  constructor(t) {
    super(t, ke.name);
  }
  _prepareContent() {
    const t = ke.colorItems, e = this.editor.dom.createElement(s.DIV, {
      attributes: { class: "colorboard" }
    });
    t.forEach((r) => {
      const i = this.editor.dom.createElement(s.SPAN, {
        attributes: { class: "colorboard-group" }
      });
      r.forEach((o) => {
        const n = this.editor.dom.createElement(s.SPAN, {
          attributes: {
            class: `colorboard-group-item${o.class ? ` ${o.class}` : ""}`
          }
        }), c = this.editor.dom.createElement(s.SPAN, {
          attributes: { "data-color": o.color }
        });
        c.style.backgroundColor = o.color, n.appendChild(c), i.appendChild(n);
      }), e.appendChild(i);
    }), this.dropdownContent.addHtmlElement(e, {});
  }
  _readyContent(t, e, r, i) {
    const o = this.editor.dom.getRange();
    t.addEventListener("click", (n) => {
      o && this.editor.dom.setRange(o), this._onClick(n, r, i);
    });
  }
  _onClick(t, e, r) {
    var o, n;
    const i = (n = (o = t.target) == null ? void 0 : o.dataset) == null ? void 0 : n.color;
    e({ style: `color: ${i}` }), r();
  }
}
class eo extends y {
  constructor(t, e, r) {
    super(t, e, r);
  }
  insert(t) {
    const e = this.editor.dom.getRange();
    if (e) {
      const i = e.toString();
      e.deleteContents();
      const o = this.editor.dom.createElement(s.SPAN, {
        attributes: t
      });
      o.textContent = i, e.insertNode(o);
    }
    const r = this.editor.dom.getSelectedEditable();
    r == null || r.normalize();
  }
}
const ro = {
  "zh-cn": {
    Color: "\u5B57\u4F53\u989C\u8272"
  }
};
class ke extends f {
  static get name() {
    return "color";
  }
  static get dependencies() {
    return [w];
  }
  static get colorItems() {
    return [
      [
        { title: "\u9ED1\u8272", color: "rgb(0, 0, 0)" },
        { title: "\u6DF1\u70703", color: "rgb(38, 38, 38)" },
        { title: "\u6DF1\u70702", color: "rgb(89, 89, 89)" },
        { title: "\u6DF1\u70701", color: "rgb(140, 140, 140)" },
        { title: "\u7070\u8272", color: "rgb(191, 191, 191)" },
        { title: "\u6D45\u70704", color: "rgb(217, 217, 217)" },
        { title: "\u6D45\u70703", color: "rgb(233, 233, 233)" },
        { title: "\u6D45\u70702", color: "rgb(245, 245, 245)" },
        { title: "\u6D45\u70701", color: "rgb(250, 250, 250)", class: "border" },
        { title: "\u767D\u8272", color: "rgb(255, 255, 255)", class: "border" }
      ],
      [
        { title: "\u7EA2\u8272", color: "rgb(245, 34, 45)" },
        { title: "\u6731\u7EA2", color: "rgb(250, 84, 28)" },
        { title: "\u6A59\u8272", color: "rgb(250, 140, 22)" },
        { title: "\u9EC4\u8272", color: "rgb(250, 219, 20)" },
        { title: "\u7EFF\u8272", color: "rgb(82, 196, 26)" },
        { title: "\u9752\u8272", color: "rgb(19, 194, 194)" },
        { title: "\u6D45\u84DD", color: "rgb(24, 144, 255)" },
        { title: "\u84DD\u8272", color: "rgb(47, 84, 235)" },
        { title: "\u7D2B\u8272", color: "rgb(114, 46, 209)" },
        { title: "\u73AB\u7EA2", color: "rgb(235, 47, 150)" }
      ],
      [
        { title: "\u7EA2\u82721", color: "rgb(255, 232, 230)" },
        { title: "\u6731\u7EA21", color: "rgb(255, 236, 224)" },
        { title: "\u6A59\u82721", color: "rgb(255, 239, 209)" },
        { title: "\u9EC4\u82721", color: "rgb(252, 252, 202)" },
        { title: "\u7EFF\u82721", color: "rgb(228, 247, 210)" },
        { title: "\u9752\u82721", color: "rgb(211, 245, 240)" },
        { title: "\u6D45\u84DD1", color: "rgb(212, 238, 252)" },
        { title: "\u84DD\u82721", color: "rgb(222, 232, 252)" },
        { title: "\u7D2B\u82721", color: "rgb(239, 225, 250)" },
        { title: "\u73AB\u7EA21", color: "rgb(250, 225, 235)" }
      ],
      [
        { title: "\u7EA2\u82722", color: "rgb(255, 163, 158)" },
        { title: "\u6731\u7EA22", color: "rgb(255, 187, 150)" },
        { title: "\u6A59\u82722", color: "rgb(255, 213, 145)" },
        { title: "\u9EC4\u82722", color: "rgb(255, 251, 143)" },
        { title: "\u7EFF\u82722", color: "rgb(183, 235, 143)" },
        { title: "\u9752\u82722", color: "rgb(135, 232, 222)" },
        { title: "\u6D45\u84DD2", color: "rgb(145, 213, 255)" },
        { title: "\u84DD\u82722", color: "rgb(173, 198, 255)" },
        { title: "\u7D2B\u82722", color: "rgb(211, 173, 247)" },
        { title: "\u73AB\u7EA22", color: "rgb(255, 173, 210)" }
      ],
      [
        { title: "\u7EA2\u82723", color: "rgb(255, 77, 79)" },
        { title: "\u6731\u7EA23", color: "rgb(255, 122, 69)" },
        { title: "\u6A59\u82723", color: "rgb(255, 169, 64)" },
        { title: "\u9EC4\u82723", color: "rgb(255, 236, 61)" },
        { title: "\u7EFF\u82723", color: "rgb(115, 209, 61)" },
        { title: "\u9752\u82723", color: "rgb(54, 207, 201)" },
        { title: "\u6D45\u84DD3", color: "rgb(64, 169, 255)" },
        { title: "\u84DD\u82723", color: "rgb(89, 126, 247)" },
        { title: "\u7D2B\u82723", color: "rgb(146, 84, 222)" },
        { title: "\u73AB\u7EA23", color: "rgb(247, 89, 171)" }
      ],
      [
        { title: "\u7EA2\u82724", color: "rgb(207, 19, 34)" },
        { title: "\u6731\u7EA24", color: "rgb(212, 56, 13)" },
        { title: "\u6A59\u82724", color: "rgb(212, 107, 8)" },
        { title: "\u9EC4\u82724", color: "rgb(212, 177, 6)" },
        { title: "\u7EFF\u82724", color: "rgb(56, 158, 13)" },
        { title: "\u9752\u82724", color: "rgb(8, 151, 156)" },
        { title: "\u6D45\u84DD4", color: "rgb(9, 109, 217)" },
        { title: "\u84DD\u82724", color: "rgb(29, 57, 196)" },
        { title: "\u7D2B\u82724", color: "rgb(83, 29, 171)" },
        { title: "\u73AB\u7EA24", color: "rgb(196, 29, 127)" }
      ],
      [
        { title: "\u7EA2\u82725", color: "rgb(130, 0, 20)" },
        { title: "\u6731\u7EA25", color: "rgb(135, 20, 0)" },
        { title: "\u6A59\u82725", color: "rgb(135, 56, 0)" },
        { title: "\u9EC4\u82725", color: "rgb(97, 71, 0)" },
        { title: "\u7EFF\u82725", color: "rgb(19, 82, 0)" },
        { title: "\u9752\u82725", color: "rgb(0, 71, 79)" },
        { title: "\u6D45\u84DD5", color: "rgb(0, 58, 140)" },
        { title: "\u84DD\u82725", color: "rgb(6, 17, 120)" },
        { title: "\u7D2B\u82725", color: "rgb(34, 7, 94)" },
        { title: "\u73AB\u7EA25", color: "rgb(120, 6, 80)" }
      ]
    ];
  }
  init() {
    this._i18n(ro), this._toolbar({
      label: this._("Color"),
      command: this.constructor.name,
      arrowDown: O["arrow-down"],
      uuid: rt()
    }), this.editor.dropdowns.set(new to(this.editor)), this.editor.commands.set(new eo(this.editor, this.constructor.name, u.COLOR));
  }
}
class io extends W {
  constructor(t) {
    super(t, Ee.name);
  }
  _prepareContent() {
    const t = Ee.colorItems, e = this.editor.dom.createElement(s.DIV, {
      attributes: { class: "colorboard" }
    });
    t.forEach((r) => {
      const i = this.editor.dom.createElement(s.SPAN, {
        attributes: { class: "colorboard-group" }
      });
      r.forEach((o) => {
        const n = this.editor.dom.createElement(s.SPAN, {
          attributes: {
            class: `colorboard-group-item${o.class ? ` ${o.class}` : ""}`
          }
        }), c = this.editor.dom.createElement(s.SPAN, {
          attributes: { "data-color": o.color }
        });
        c.style.backgroundColor = o.color, n.appendChild(c), i.appendChild(n);
      }), e.appendChild(i);
    }), this.dropdownContent.addHtmlElement(e, {});
  }
  _readyContent(t, e, r, i) {
    const o = this.editor.dom.getRange();
    t.addEventListener("click", (n) => {
      o && this.editor.dom.setRange(o), this._onClick(n, r, i);
    });
  }
  _onClick(t, e, r) {
    var o, n;
    const i = (n = (o = t.target) == null ? void 0 : o.dataset) == null ? void 0 : n.color;
    e({ style: `background: ${i}` }), r();
  }
}
class oo extends y {
  constructor(t, e, r) {
    super(t, e, r);
  }
  insert(t) {
    const e = this.editor.dom.getRange();
    if (e) {
      const i = e.toString();
      e.deleteContents();
      const o = this.editor.dom.createElement(s.SPAN, {
        attributes: t
      });
      o.textContent = i, e.insertNode(o);
    }
    const r = this.editor.dom.getSelectedEditable();
    r == null || r.normalize();
  }
}
const so = {
  "zh-cn": {
    Background: "\u80CC\u666F\u989C\u8272"
  }
};
class Ee extends f {
  static get name() {
    return "background";
  }
  static get dependencies() {
    return [w];
  }
  static get colorItems() {
    return [
      [
        { title: "\u9ED1\u8272", color: "rgb(0, 0, 0)" },
        { title: "\u6DF1\u70703", color: "rgb(38, 38, 38)" },
        { title: "\u6DF1\u70702", color: "rgb(89, 89, 89)" },
        { title: "\u6DF1\u70701", color: "rgb(140, 140, 140)" },
        { title: "\u7070\u8272", color: "rgb(191, 191, 191)" },
        { title: "\u6D45\u70704", color: "rgb(217, 217, 217)" },
        { title: "\u6D45\u70703", color: "rgb(233, 233, 233)" },
        { title: "\u6D45\u70702", color: "rgb(245, 245, 245)" },
        { title: "\u6D45\u70701", color: "rgb(250, 250, 250)", class: "border" },
        { title: "\u767D\u8272", color: "rgb(255, 255, 255)", class: "border" }
      ],
      [
        { title: "\u7EA2\u8272", color: "rgb(245, 34, 45)" },
        { title: "\u6731\u7EA2", color: "rgb(250, 84, 28)" },
        { title: "\u6A59\u8272", color: "rgb(250, 140, 22)" },
        { title: "\u9EC4\u8272", color: "rgb(250, 219, 20)" },
        { title: "\u7EFF\u8272", color: "rgb(82, 196, 26)" },
        { title: "\u9752\u8272", color: "rgb(19, 194, 194)" },
        { title: "\u6D45\u84DD", color: "rgb(24, 144, 255)" },
        { title: "\u84DD\u8272", color: "rgb(47, 84, 235)" },
        { title: "\u7D2B\u8272", color: "rgb(114, 46, 209)" },
        { title: "\u73AB\u7EA2", color: "rgb(235, 47, 150)" }
      ],
      [
        { title: "\u7EA2\u82721", color: "rgb(255, 232, 230)" },
        { title: "\u6731\u7EA21", color: "rgb(255, 236, 224)" },
        { title: "\u6A59\u82721", color: "rgb(255, 239, 209)" },
        { title: "\u9EC4\u82721", color: "rgb(252, 252, 202)" },
        { title: "\u7EFF\u82721", color: "rgb(228, 247, 210)" },
        { title: "\u9752\u82721", color: "rgb(211, 245, 240)" },
        { title: "\u6D45\u84DD1", color: "rgb(212, 238, 252)" },
        { title: "\u84DD\u82721", color: "rgb(222, 232, 252)" },
        { title: "\u7D2B\u82721", color: "rgb(239, 225, 250)" },
        { title: "\u73AB\u7EA21", color: "rgb(250, 225, 235)" }
      ],
      [
        { title: "\u7EA2\u82722", color: "rgb(255, 163, 158)" },
        { title: "\u6731\u7EA22", color: "rgb(255, 187, 150)" },
        { title: "\u6A59\u82722", color: "rgb(255, 213, 145)" },
        { title: "\u9EC4\u82722", color: "rgb(255, 251, 143)" },
        { title: "\u7EFF\u82722", color: "rgb(183, 235, 143)" },
        { title: "\u9752\u82722", color: "rgb(135, 232, 222)" },
        { title: "\u6D45\u84DD2", color: "rgb(145, 213, 255)" },
        { title: "\u84DD\u82722", color: "rgb(173, 198, 255)" },
        { title: "\u7D2B\u82722", color: "rgb(211, 173, 247)" },
        { title: "\u73AB\u7EA22", color: "rgb(255, 173, 210)" }
      ],
      [
        { title: "\u7EA2\u82723", color: "rgb(255, 77, 79)" },
        { title: "\u6731\u7EA23", color: "rgb(255, 122, 69)" },
        { title: "\u6A59\u82723", color: "rgb(255, 169, 64)" },
        { title: "\u9EC4\u82723", color: "rgb(255, 236, 61)" },
        { title: "\u7EFF\u82723", color: "rgb(115, 209, 61)" },
        { title: "\u9752\u82723", color: "rgb(54, 207, 201)" },
        { title: "\u6D45\u84DD3", color: "rgb(64, 169, 255)" },
        { title: "\u84DD\u82723", color: "rgb(89, 126, 247)" },
        { title: "\u7D2B\u82723", color: "rgb(146, 84, 222)" },
        { title: "\u73AB\u7EA23", color: "rgb(247, 89, 171)" }
      ],
      [
        { title: "\u7EA2\u82724", color: "rgb(207, 19, 34)" },
        { title: "\u6731\u7EA24", color: "rgb(212, 56, 13)" },
        { title: "\u6A59\u82724", color: "rgb(212, 107, 8)" },
        { title: "\u9EC4\u82724", color: "rgb(212, 177, 6)" },
        { title: "\u7EFF\u82724", color: "rgb(56, 158, 13)" },
        { title: "\u9752\u82724", color: "rgb(8, 151, 156)" },
        { title: "\u6D45\u84DD4", color: "rgb(9, 109, 217)" },
        { title: "\u84DD\u82724", color: "rgb(29, 57, 196)" },
        { title: "\u7D2B\u82724", color: "rgb(83, 29, 171)" },
        { title: "\u73AB\u7EA24", color: "rgb(196, 29, 127)" }
      ],
      [
        { title: "\u7EA2\u82725", color: "rgb(130, 0, 20)" },
        { title: "\u6731\u7EA25", color: "rgb(135, 20, 0)" },
        { title: "\u6A59\u82725", color: "rgb(135, 56, 0)" },
        { title: "\u9EC4\u82725", color: "rgb(97, 71, 0)" },
        { title: "\u7EFF\u82725", color: "rgb(19, 82, 0)" },
        { title: "\u9752\u82725", color: "rgb(0, 71, 79)" },
        { title: "\u6D45\u84DD5", color: "rgb(0, 58, 140)" },
        { title: "\u84DD\u82725", color: "rgb(6, 17, 120)" },
        { title: "\u7D2B\u82725", color: "rgb(34, 7, 94)" },
        { title: "\u73AB\u7EA25", color: "rgb(120, 6, 80)" }
      ]
    ];
  }
  init() {
    this._i18n(so), this._toolbar({
      label: this._("Background"),
      command: this.constructor.name,
      arrowDown: O["arrow-down"],
      uuid: rt()
    }), this.editor.dropdowns.set(new io(this.editor)), this.editor.commands.set(
      new oo(this.editor, this.constructor.name, u.BACKGROUND)
    );
  }
}
class no extends D {
  constructor(t, e = void 0) {
    super(t, Le.name, e);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Image")).addTextInput("src", this._("URL"), {
      pattern: "(https?|/).+",
      placeholder: this._("Insert URL to image"),
      required: "required"
    }).addTextInput("alt", this._("Alternative text"), {
      placeholder: this._("Text shown when media element is not available")
    }).addNumberInput("width", this._("Width")).addNumberInput("height", this._("Height")).addTextInput("id", this._("ID"));
  }
}
var ie, cr;
class ao extends C {
  constructor(e) {
    super(e);
    h(this, ie);
    this.editor.textarea.addEventListener("sethtml", this), this.editor.textarea.addEventListener("insertimg", this);
  }
  sethtml(e) {
    Array.from(e.detail.element.getElementsByTagName(s.IMG)).forEach(
      (r) => m(this, ie, cr).call(this, r)
    );
  }
  insertimg(e) {
    m(this, ie, cr).call(this, e.detail.element);
  }
}
ie = new WeakSet(), cr = function(e) {
  const r = e.getAttribute("src");
  r ? (e.setAttribute("src", this.editor.url(r)), this.editor.dom.wrap(e, s.FIGURE, {
    attributes: { class: Le.name }
  })) : e.parentElement.removeChild(e);
};
class lo extends it {
  filter(t) {
    t.querySelectorAll(`${s.FIGURE} > ${s.FIGCAPTION}:only-child`).forEach((e) => e.parentElement.removeChild(e));
  }
}
class co extends C {
  constructor(t) {
    super(t), this.editor.textarea.addEventListener("insertfigure", this);
  }
  insertfigure(t) {
    t.detail.element.querySelector(":scope > " + s.FIGCAPTION) || t.detail.element.appendChild(this.editor.dom.createElement(s.FIGCAPTION));
  }
}
class Ze extends f {
  static get name() {
    return "figure";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._tag({
      name: s.FIGURE,
      group: u.FIGURE,
      command: this.constructor.name,
      attributes: ["class", "data-command"],
      children: [
        u.AUDIO,
        u.CAPTION,
        u.IFRAME,
        u.IMAGE,
        u.PREFORMAT,
        u.QUOTE,
        u.TABLE,
        u.VIDEO
      ],
      alignable: !0,
      deletable: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0
    }), this._tag({
      name: s.FIGCAPTION,
      group: u.CAPTION,
      children: [u.FORMAT],
      editable: !0,
      navigable: !0,
      enter: s.P
    }), new co(this.editor), this.editor.filters.add(new lo(this.editor));
  }
}
const ho = {
  "zh-cn": {
    Image: "\u56FE\u50CF",
    "Alternative text": "Alternative text",
    Cancel: "Cancel",
    Height: "Height",
    ID: "ID",
    "Insert URL to image": "Insert URL to image",
    Save: "Save",
    "Text shown when media element is not available": "Text shown when media element is not available",
    URL: "URL",
    Width: "Width"
  }
};
class Le extends f {
  static get name() {
    return "image";
  }
  static get dependencies() {
    return [w, Ze];
  }
  static get config() {
    return { browser: void 0 };
  }
  init() {
    var t, e;
    this._i18n(ho), this._tag({
      name: s.IMG,
      group: u.IMAGE,
      command: this.constructor.name,
      attributes: ["class", "data-command", "alt", "height", "id", "src", "width"],
      empty: !0,
      navigable: !0
    }), new ao(this.editor), this.editor.dialogs.set(
      new no(this.editor, (e = (t = this.editor.config.customPlugins) == null ? void 0 : t.image) == null ? void 0 : e.browser)
    ), this._command(s.IMG), this._toolbar({
      label: this._("Image"),
      command: this.constructor.name
    });
  }
}
class uo extends D {
  constructor(t, e = void 0) {
    super(t, Te.name, e);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Video")).addTextInput("src", this._("URL"), {
      pattern: "(https?|/).+",
      placeholder: this._("Insert URL to video"),
      required: "required"
    }).addNumberInput("width", this._("Width")).addNumberInput("height", this._("Height")).addTextInput("id", this._("ID"));
  }
}
var oe, hr;
class mo extends C {
  constructor(e) {
    super(e);
    h(this, oe);
    this.editor.textarea.addEventListener("sethtml", this), this.editor.textarea.addEventListener("insertvideo", this);
  }
  sethtml(e) {
    Array.from(e.detail.element.getElementsByTagName(s.VIDEO)).forEach(
      (r) => m(this, oe, hr).call(this, r)
    );
  }
  insertvideo(e) {
    m(this, oe, hr).call(this, e.detail.element);
  }
}
oe = new WeakSet(), hr = function(e) {
  const r = e.getAttribute("src");
  r ? (e.setAttribute("src", this.editor.url(r)), e.controls = !0, this.editor.dom.wrap(e, s.FIGURE, {
    attributes: { class: Te.name }
  })) : e.parentElement.removeChild(e);
};
const go = {
  "zh-cn": {
    Video: "\u89C6\u9891",
    Cancel: "Cancel",
    Height: "Height",
    ID: "ID",
    "Insert URL to video": "Insert URL to video",
    Save: "Save",
    URL: "URL",
    Width: "Width"
  }
};
class Te extends f {
  static get name() {
    return "video";
  }
  static get dependencies() {
    return [w, Ze];
  }
  static get config() {
    return { browser: void 0 };
  }
  init() {
    var t, e;
    this._i18n(go), this._tag({
      name: s.VIDEO,
      group: u.VIDEO,
      command: this.constructor.name,
      attributes: ["class", "data-command", "controls", "height", "id", "src", "width"],
      empty: !0,
      navigable: !0
    }), new mo(this.editor), this.editor.dialogs.set(
      new uo(this.editor, (e = (t = this.editor.config.customPlugins) == null ? void 0 : t.video) == null ? void 0 : e.browser)
    ), this._command(s.VIDEO), this._toolbar({
      label: this._("Video"),
      command: this.constructor.name
    });
  }
}
class po extends D {
  constructor(t, e = void 0) {
    super(t, xe.name, e);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Audio")).addTextInput("src", this._("URL"), {
      pattern: "(https?|/).+",
      placeholder: this._("Insert URL to audio"),
      required: "required"
    }).addTextInput("id", this._("ID"));
  }
}
var se, ur;
class fo extends C {
  constructor(e) {
    super(e);
    h(this, se);
    this.editor.textarea.addEventListener("sethtml", this), this.editor.textarea.addEventListener("insertaudio", this);
  }
  sethtml(e) {
    Array.from(e.detail.element.getElementsByTagName(s.AUDIO)).forEach(
      (r) => m(this, se, ur).call(this, r)
    );
  }
  insertaudio(e) {
    m(this, se, ur).call(this, e.detail.element);
  }
}
se = new WeakSet(), ur = function(e) {
  const r = e.getAttribute("src");
  r ? (e.setAttribute("src", this.editor.url(r)), e.controls = !0, this.editor.dom.wrap(e, s.FIGURE, {
    attributes: { class: xe.name }
  })) : e.parentElement.removeChild(e);
};
const wo = {
  "zh-cn": {
    Audio: "\u97F3\u9891",
    Cancel: "Cancel",
    ID: "ID",
    "Insert URL to audio": "Insert URL to audio",
    Save: "Save",
    URL: "URL"
  }
};
class xe extends f {
  static get name() {
    return "audio";
  }
  static get dependencies() {
    return [w, Ze];
  }
  static get config() {
    return { browser: void 0 };
  }
  init() {
    var t, e;
    this._i18n(wo), this._tag({
      name: s.AUDIO,
      group: u.AUDIO,
      command: this.constructor.name,
      attributes: ["class", "data-command", "controls", "id", "src"],
      empty: !0,
      navigable: !0
    }), new fo(this.editor), this.editor.dialogs.set(
      new po(this.editor, (e = (t = this.editor.config.customPlugins) == null ? void 0 : t.audio) == null ? void 0 : e.browser)
    ), this._command(s.AUDIO), this._toolbar({
      label: this._("Audio"),
      command: this.constructor.name
    });
  }
}
class bo extends y {
  constructor(t) {
    super(t, et.name, s.TABLE);
  }
  insert({ rows: t, cols: e } = {}) {
    const r = this.editor.dom.createElement(s.TABLE, {
      attributes: { class: et.name, "data-command": et.name }
    }), i = this.editor.dom.createElement(s.TBODY), o = parseInt(t, 10) || 1, n = parseInt(e, 10) || 1;
    for (let c = 0; c < o; c++) {
      const g = this.editor.dom.createElement(s.TR);
      i.appendChild(g);
      for (let p = 0; p < n; ++p)
        g.appendChild(this.editor.dom.createElement(s.TD));
    }
    r.appendChild(i), this.editor.dom.insert(r);
  }
}
class ko extends D {
  constructor(t) {
    super(t, et.name);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Table")).addNumberInput("rows", this._("Rows"), {
      min: "1",
      required: "required",
      value: "1"
    }).addNumberInput("cols", this._("Columns"), {
      min: "1",
      required: "required",
      value: "1"
    });
  }
}
class Eo extends it {
  filter(t) {
    t instanceof HTMLElement && t.localName === s.FIGURE && t.classList.contains(et.name) && t.querySelector(":scope > " + s.TABLE) && !t.querySelector(":scope > " + s.FIGCAPTION) ? (t.insertAdjacentElement(
      I.BEFOREBEGIN,
      t.querySelector(":scope > " + s.TABLE)
    ), t.parentElement.removeChild(t)) : (t instanceof HTMLTableElement && t.querySelector(`:scope > ${s.THEAD}, :scope > ${s.TFOOT}`) && !t.querySelector(":scope > " + s.TBODY) || t instanceof HTMLTableSectionElement && t.rows.length <= 0 || t instanceof HTMLTableRowElement && !t.querySelector(
      `:scope > ${s.TH}:not(:empty), :scope > ${s.TD}:not(:empty)`
    )) && t.parentElement.removeChild(t);
  }
}
var tt, pt, ht, ge, Pe, Wr;
class Lo extends C {
  constructor(e) {
    super(e);
    h(this, tt);
    h(this, ht);
    h(this, Pe);
    this.editor.textarea.addEventListener("inserttable", this), this.editor.textarea.addEventListener("inserttd", this), this.editor.textarea.addEventListener("insertth", this);
  }
  inserttable(e) {
    e.detail.element.tBodies.length > 0 && e.detail.element.tBodies[0].rows[0] && (!e.detail.element.tHead || !e.detail.element.tFoot) && (e.detail.element.tHead || m(this, tt, pt).call(this, e.detail.element.createTHead(), e.detail.element.tBodies[0].rows[0].cells.length), e.detail.element.tFoot || m(this, tt, pt).call(this, e.detail.element.createTFoot(), e.detail.element.tBodies[0].rows[0].cells.length));
  }
  inserttd(e) {
    e.detail.element.addEventListener("keydown", this);
  }
  insertth(e) {
    e.detail.element.addEventListener("keydown", this);
  }
  keydown(e) {
    const r = e.target, i = r.parentElement, o = i.parentElement, n = o instanceof HTMLTableElement ? o : o.parentElement, c = [d.LEFT, d.RIGHT, d.UP, d.DOWN], g = _(e, c), p = _(e, c, { ctrl: !0 }), L = _(e, c, { alt: !0 }), M = _(e, c, { alt: !0, shift: !0 });
    if (r instanceof HTMLTableCellElement && i instanceof HTMLTableRowElement && (o instanceof HTMLTableElement || o instanceof HTMLTableSectionElement) && n instanceof HTMLTableElement && (g && m(this, Pe, Wr).call(this, r, e.key) || p || L || M)) {
      const E = r.cellIndex, A = i.cells.length, j = o.rows.length, N = o instanceof HTMLTableElement ? i.rowIndex : i.sectionRowIndex, mt = E === 0, Ke = E === A - 1, Jr = N === 0, ti = N === j - 1, Tr = i.rowIndex === 0, xr = i.rowIndex === n.rows.length - 1;
      e.preventDefault(), e.stopPropagation(), g ? e.key === d.LEFT && !mt ? this.editor.dom.focusEnd(i.cells[E - 1]) : e.key === d.LEFT && Tr ? this.editor.dom.focusEnd(n.rows[n.rows.length - 1].cells[A - 1]) : e.key === d.LEFT ? this.editor.dom.focusEnd(n.rows[i.rowIndex - 1].cells[A - 1]) : e.key === d.RIGHT && !Ke ? i.cells[E + 1].focus() : e.key === d.RIGHT && xr ? n.rows[0].cells[0].focus() : e.key === d.RIGHT ? n.rows[i.rowIndex + 1].cells[0].focus() : e.key === d.UP && Tr ? n.rows[n.rows.length - 1].cells[E].focus() : e.key === d.UP ? n.rows[i.rowIndex - 1].cells[E].focus() : e.key === d.DOWN && xr ? n.rows[0].cells[E].focus() : e.key === d.DOWN && n.rows[i.rowIndex + 1].cells[E].focus() : p ? (e.key === d.LEFT && A > 1 && mt ? Array.from(n.rows).forEach((T) => T.appendChild(T.cells[E])) : e.key === d.LEFT && A > 1 ? Array.from(n.rows).forEach(
        (T) => T.insertBefore(T.cells[E], T.cells[E - 1])
      ) : e.key === d.RIGHT && A > 1 && Ke ? Array.from(n.rows).forEach(
        (T) => T.insertBefore(T.cells[E], T.cells[0])
      ) : e.key === d.RIGHT && A > 1 ? Array.from(n.rows).forEach(
        (T) => T.insertBefore(T.cells[E + 1], T.cells[E])
      ) : e.key === d.UP && j > 1 && Jr ? o.appendChild(i) : e.key === d.UP && j > 1 ? o.insertBefore(i, o.rows[N - 1]) : e.key === d.DOWN && j > 1 && ti ? o.insertBefore(i, o.rows[0]) : e.key === d.DOWN && j > 1 && o.insertBefore(o.rows[N + 1], i), r.focus()) : L ? e.key === d.LEFT ? Array.from(n.rows).forEach((T) => m(this, ht, ge).call(this, T, T.cells[E])) : e.key === d.RIGHT ? Array.from(n.rows).forEach((T) => m(this, ht, ge).call(this, T, T.cells[E + 1])) : e.key === d.UP ? m(this, tt, pt).call(this, o, A, N) : e.key === d.DOWN && m(this, tt, pt).call(this, o, A, N + 1) : M && (e.key === d.LEFT && !mt ? Array.from(n.rows).forEach((T) => T.deleteCell(E - 1)) : e.key === d.RIGHT && !Ke ? Array.from(n.rows).forEach((T) => T.deleteCell(E + 1)) : e.key === d.UP && N > 0 ? o.deleteRow(N - 1) : e.key === d.DOWN && N < j - 1 && o.deleteRow(N + 1));
    }
  }
}
tt = new WeakSet(), pt = function(e, r, i = 0) {
  const o = e.insertRow(i);
  for (let n = 0; n < r; n++)
    m(this, ht, ge).call(this, o);
}, ht = new WeakSet(), ge = function(e, r = null) {
  const i = e.parentElement.localName === s.THEAD ? s.TH : s.TD;
  e.insertBefore(this.editor.dom.createElement(i), r);
}, Pe = new WeakSet(), Wr = function(e, r) {
  if ([d.UP, d.DOWN].includes(r))
    return !0;
  const i = this.editor.dom.getSelection(), o = i.anchorNode instanceof HTMLElement ? i.anchorNode : e;
  if (!i.isCollapsed)
    return !1;
  if (r === d.LEFT) {
    let c = e.firstChild;
    return c instanceof HTMLElement && (c = c.firstChild), i.anchorOffset === 0 && [e, c].includes(o);
  }
  let n = e.lastChild;
  return e.lastChild instanceof HTMLBRElement && e.lastChild.previousSibling && (n = e.lastChild.previousSibling), n instanceof HTMLElement && (n = n.lastChild), i.anchorOffset === o.textContent.length && [e, n].includes(o);
};
const To = {
  "zh-cn": {
    Table: "\u8868\u683C",
    Cancel: "Cancel",
    Columns: "Columns",
    "Delete next column": "Delete next column",
    "Delete next row": "Delete next row",
    "Delete previous column": "Delete previous column",
    "Delete previous row": "Delete previous row",
    Rows: "Rows",
    Save: "Save",
    "Sort after next column": "Sort after next column",
    "Sort after next row": "Sort after next row",
    "Sort before previous column": "Sort before previous column",
    "Sort before previous row": "Sort before previous row",
    "Sort column to the beginning": "Sort column to the beginning",
    "Sort row to the beginning": "Sort row to the beginning",
    "Sort column to the end": "Sort column to the end",
    "Sort row to the end": "Sort row to the end"
  }
};
var ut, pe, ne, mr;
class et extends f {
  constructor() {
    super(...arguments);
    h(this, ut);
    h(this, ne);
  }
  static get name() {
    return "table";
  }
  static get dependencies() {
    return [w, ce];
  }
  init() {
    this._i18n(To), this._tag({
      name: s.TABLE,
      group: u.TABLE,
      command: this.constructor.name,
      attributes: ["class", "data-command"],
      children: [u.TABLESECTION],
      editable: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0,
      deletable: !0
    }), this._tag(m(this, ut, pe).call(this, s.THEAD)), this._tag(m(this, ut, pe).call(this, s.TBODY)), this._tag(m(this, ut, pe).call(this, s.TFOOT)), this._tag({
      name: s.TR,
      group: u.TABLEROW,
      children: [u.TABLECELL]
    }), this._tag(m(this, ne, mr).call(this, s.TH)), this._tag(m(this, ne, mr).call(this, s.TD)), new Lo(this.editor), this.editor.filters.add(new Eo(this.editor)), this.editor.dialogs.set(new ko(this.editor)), this.editor.commands.set(new bo(this.editor, this.constructor.name, s.TABLE)), this._toolbar({
      label: this._("Table"),
      command: this.constructor.name
    });
  }
}
ut = new WeakSet(), pe = function(e) {
  return {
    name: e,
    group: u.TABLESECTION,
    children: [u.TABLEROW]
  };
}, ne = new WeakSet(), mr = function(e) {
  return {
    name: e,
    group: u.TABLECELL,
    children: [u.BREAK, u.FORMAT],
    editable: !0,
    empty: !0
  };
};
class xo extends it {
  filter(t) {
    t instanceof HTMLElement && t.classList.contains(Er.name) && t.querySelector(":scope > " + s.PRE) && !t.querySelector(":scope > " + s.FIGCAPTION) && (t.insertAdjacentElement(
      I.BEFOREBEGIN,
      t.querySelector(":scope > " + s.PRE)
    ), t.parentElement.removeChild(t));
  }
}
class Mo extends C {
  constructor(t) {
    super(t), this.editor.textarea.addEventListener("insertpre", this), this.editor.textarea.addEventListener("deletepre", this);
  }
  deletepre(t) {
    t.detail.target.classList.contains(Er.name) && t.detail.target.parentElement.removeChild(t.detail.target);
  }
}
const Co = {
  "zh-cn": {
    "Preformatted Text": "\u9884\u8BBE\u6587\u672C\u683C\u5F0F"
  }
};
class Er extends f {
  static get name() {
    return "preformat";
  }
  static get dependencies() {
    return [w, ce];
  }
  init() {
    this._i18n(Co), this._tag({
      name: s.PRE,
      group: u.PREFORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"],
      children: [u.BREAK],
      editable: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0,
      deletable: !0,
      enter: s.P
    }), new Mo(this.editor), this._command(s.PRE), this._toolbar({
      label: this._("Preformatted Text"),
      command: this.constructor.name
    }), this.editor.filters.add(new xo(this.editor));
  }
}
const Ao = {
  "zh-cn": {
    "Horizontal Rule": "\u6C34\u5E73\u7EBF"
  }
};
class Io extends f {
  static get name() {
    return "horizontalRule";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Ao), this._tag({
      name: s.HR,
      group: u.RULE,
      command: this.constructor.name,
      attributes: ["class", "data-command"],
      deletable: !0,
      empty: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0
    }), this._command(s.HR), this._toolbar({
      label: this._("Horizontal Rule"),
      command: this.constructor.name
    });
  }
}
class vo extends D {
  constructor(t, e = void 0) {
    super(t, Zr.name, e);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Block")).addTextInput("id", this._("ID"), { required: "required" });
  }
}
class _o extends HTMLElement {
  get content() {
    return this.shadowRoot.innerHTML;
  }
  set content(t) {
    this.shadowRoot.innerHTML = t;
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
}
class Ho extends C {
  constructor(t) {
    super(t), this.editor.textarea.addEventListener("sethtml", this), this.editor.textarea.addEventListener("insertappblock", this);
  }
  sethtml(t) {
    Array.from(t.detail.element.getElementsByTagName(s.BLOCK)).forEach(
      (e) => e.id || e.parentElement.removeChild(e)
    );
  }
  async insertappblock(t) {
    var n, c, g, p;
    if (!t.detail.element.id) {
      t.detail.element.parentElement.removeChild(t.detail.element);
      return;
    }
    if (!((n = this.editor.config.customPlugins) != null && n.block.api))
      return;
    const e = (c = this.editor.config.customPlugins) == null ? void 0 : c.block.api.replace(
      "{id}",
      t.detail.element.id
    ), r = await fetch(e, { mode: "no-cors" });
    if (!r.ok)
      return;
    let i = "";
    (g = this.editor.config.customPlugins) != null && g.block.css && (i = (p = this.editor.config.customPlugins) == null ? void 0 : p.block.css.split(",").map((L) => `<link rel="stylesheet" href="${L}">`).join(""));
    const o = await r.text();
    t.detail.element.content = i + o;
  }
}
const qr = {
  "zh-cn": {
    Cancel: "Cancel",
    Height: "Height",
    ID: "ID",
    Iframe: "Iframe",
    "Insert URL to embedded page": "Insert URL to embedded page",
    Save: "Save",
    URL: "URL",
    Width: "Width"
  }
};
class Zr extends f {
  static get name() {
    return "block";
  }
  static get dependencies() {
    return [w];
  }
  static get config() {
    return { api: void 0, browser: void 0, css: void 0 };
  }
  init() {
    var t, e;
    this._i18n(qr), this.editor.dom.registerElement(s.BLOCK, _o), this._tag({
      name: s.BLOCK,
      group: u.BLOCK,
      command: this.constructor.name,
      attributes: ["class", "data-command", "id"],
      deletable: !0,
      empty: !0,
      focusable: !0,
      navigable: !0,
      sortable: !0
    }), new Ho(this.editor), this.editor.dialogs.set(
      new vo(this.editor, (e = (t = this.editor.config.customPlugins) == null ? void 0 : t.block) == null ? void 0 : e.browser)
    ), this._command(s.BLOCK), this._toolbar({
      label: this._("Block"),
      command: this.constructor.name
    });
  }
}
class No extends D {
  constructor(t, e = void 0) {
    super(t, Lr.name, e);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Iframe")).addTextInput("src", this._("URL"), {
      pattern: "(https?|/).+",
      placeholder: this._("Insert URL to embedded page"),
      required: "required"
    }).addNumberInput("width", this._("Width")).addNumberInput("height", this._("Height")).addTextInput("id", this._("ID"));
  }
}
var ae, gr;
class Ro extends C {
  constructor(e) {
    super(e);
    h(this, ae);
    this.editor.textarea.addEventListener("sethtml", this), this.editor.textarea.addEventListener("insertiframe", this);
  }
  sethtml(e) {
    Array.from(e.detail.element.getElementsByTagName(s.IFRAME)).forEach(
      (r) => m(this, ae, gr).call(this, r)
    );
  }
  insertiframe(e) {
    m(this, ae, gr).call(this, e.detail.element);
  }
}
ae = new WeakSet(), gr = function(e) {
  const r = e.getAttribute("src");
  r ? (e.setAttribute("src", this.editor.url(r)), e.allowFullscreen = !0, this.editor.dom.wrap(e, s.FIGURE, {
    attributes: { class: Lr.name }
  })) : e.parentElement.removeChild(e);
};
class Lr extends f {
  static get name() {
    return "iframe";
  }
  static get dependencies() {
    return [w, Ze];
  }
  static get config() {
    return { browser: void 0 };
  }
  init() {
    var t, e;
    this._i18n(qr), this._tag({
      name: s.IFRAME,
      group: u.IFRAME,
      command: this.constructor.name,
      attributes: ["class", "data-command", "allowfullscreen", "height", "id", "src", "width"],
      empty: !0,
      navigable: !0
    }), new Ro(this.editor), this.editor.dialogs.set(
      new No(this.editor, (e = (t = this.editor.config.customPlugins) == null ? void 0 : t.iframe) == null ? void 0 : e.browser)
    ), this._command(s.IFRAME), this._toolbar({
      label: this._("Iframe"),
      command: this.constructor.name
    });
  }
}
const yo = {
  "zh-cn": {
    bold: "bold"
  }
};
class _r extends f {
  static get name() {
    return "bold";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(yo), this._tag({
      name: s.B,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.B), this._formatbar({
      label: this._("bold"),
      command: this.constructor.name,
      key: d.B
    });
  }
}
const Do = {
  "zh-cn": {
    italic: "italic"
  }
};
class Hr extends f {
  static get name() {
    return "italic";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Do), this._tag({
      name: s.I,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.I), this._formatbar({
      label: this._("italic"),
      command: this.constructor.name,
      key: d.I
    });
  }
}
const Oo = {
  "zh-cn": {
    underline: "underline"
  }
};
class Bo extends f {
  static get name() {
    return "underline";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Oo), this._tag({
      name: s.U,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.U), this._formatbar({
      label: this._("underline"),
      command: this.constructor.name,
      key: d.U
    });
  }
}
class jo extends D {
  constructor(t) {
    super(t, fr.name);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Link")).addTextInput("href", this._("URL"), {
      pattern: "(https?|/|mailto:|tel:).+",
      placeholder: this._("Insert link or leave empty to unlink")
    });
  }
}
var de, pr;
class So extends C {
  constructor(e) {
    super(e);
    h(this, de);
    this.editor.textarea.addEventListener("sethtml", this), this.editor.textarea.addEventListener("inserta", this);
  }
  sethtml(e) {
    Array.from(e.detail.element.getElementsByTagName(s.A)).forEach(
      (r) => m(this, de, pr).call(this, r)
    );
  }
  inserta(e) {
    m(this, de, pr).call(this, e.detail.element);
  }
}
de = new WeakSet(), pr = function(e) {
  const r = e.getAttribute("href");
  r ? e.setAttribute("href", this.editor.url(r)) : e.parentElement.replaceChild(this.editor.dom.createText(e.textContent), e);
};
const zo = {
  "zh-cn": {
    Cancel: "Cancel",
    "Insert link or leave empty to unlink": "Insert link or leave empty to unlink",
    Link: "Link",
    Save: "Save",
    URL: "URL"
  }
};
class fr extends f {
  static get name() {
    return "link";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(zo), this._tag({
      name: s.A,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command", "href"]
    }), new So(this.editor), this.editor.dialogs.set(new jo(this.editor)), this._command(s.A), this._formatbar({
      label: this._("Link"),
      command: this.constructor.name,
      key: d.L
    });
  }
}
const Vo = {
  "zh-cn": {
    subscript: "subscript"
  }
};
class Fo extends f {
  static get name() {
    return "subscript";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Vo), this._tag({
      name: s.SUB,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.SUB), this._formatbar({
      label: this._("subscript"),
      command: this.constructor.name,
      key: d.X
    });
  }
}
const Uo = {
  "zh-cn": {
    superscript: "superscript"
  }
};
class Po extends f {
  static get name() {
    return "superscript";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Uo), this._tag({
      name: s.SUP,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.SUP), this._formatbar({
      label: this._("superscript"),
      command: this.constructor.name,
      key: d.Y
    });
  }
}
const Go = {
  "zh-cn": {
    "strongly emphasized": "strongly emphasized"
  }
};
class Nr extends f {
  static get name() {
    return "strong";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Go), this._tag({
      name: s.STRONG,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.STRONG), this._formatbar({
      label: this._("strongly emphasized"),
      command: this.constructor.name,
      key: d.S
    });
  }
}
const $o = {
  "zh-cn": {
    strikethrough: "strikethrough"
  }
};
class Wo extends f {
  static get name() {
    return "strikethrough";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n($o), this._tag({
      name: s.S,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.S), this._formatbar({
      label: this._("strikethrough"),
      command: this.constructor.name,
      key: d.R
    });
  }
}
const qo = {
  "zh-cn": {
    "Text Insertion": "Text Insertion"
  }
};
class Zo extends f {
  static get name() {
    return "insertion";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(qo), this._tag({
      name: s.INS,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.INS), this._formatbar({
      label: this._("Text Insertion"),
      command: this.constructor.name,
      key: d.F
    });
  }
}
const Ko = {
  "zh-cn": {
    "Text Deletion": "Text Deletion"
  }
};
class Qo extends f {
  static get name() {
    return "deletion";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Ko), this._tag({
      name: s.DEL,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.DEL), this._formatbar({
      label: this._("Text Deletion"),
      command: this.constructor.name,
      key: d.G
    });
  }
}
const Xo = {
  "zh-cn": {
    small: "small"
  }
};
class Yo extends f {
  static get name() {
    return "small";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Xo), this._tag({
      name: s.SMALL,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.SMALL), this._formatbar({
      label: this._("small"),
      command: this.constructor.name,
      key: d.W
    });
  }
}
const Jo = {
  "zh-cn": {
    emphasized: "emphasized"
  }
};
class ts extends f {
  static get name() {
    return "emphasis";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Jo), this._tag({
      name: s.EM,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.EM), this._formatbar({
      label: this._("emphasized"),
      command: this.constructor.name,
      key: d.E
    });
  }
}
const es = {
  "zh-cn": {
    Code: "Code"
  }
};
class rs extends f {
  static get name() {
    return "code";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(es), this._tag({
      name: s.CODE,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.CODE), this._formatbar({
      label: this._("Code"),
      command: this.constructor.name,
      key: d.C
    });
  }
}
const is = {
  "zh-cn": {
    Quote: "Quote"
  }
};
class os extends f {
  static get name() {
    return "quote";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(is), this._tag({
      name: s.Q,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.Q), this._formatbar({
      label: this._("Quote"),
      command: this.constructor.name,
      key: d.Q
    });
  }
}
const ss = {
  "zh-cn": {
    Citation: "Citation"
  }
};
class ns extends f {
  static get name() {
    return "cite";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(ss), this._tag({
      name: s.CITE,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.CITE), this._formatbar({
      label: this._("Citation"),
      command: this.constructor.name,
      key: d.Z
    });
  }
}
class as extends D {
  constructor(t) {
    super(t, Kr.name);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Abbreviation")).addTextInput("title", this._("Full term"), {
      placeholder: this._("Insert full term or leave empty to remove it")
    });
  }
}
const ds = {
  "zh-cn": {
    Abbreviation: "Abbreviation",
    Cancel: "Cancel",
    "Full term": "Full term",
    "Insert full term or leave empty to remove it": "Insert full term or leave empty to remove it",
    Save: "Save"
  }
};
class Kr extends f {
  static get name() {
    return "abbreviation";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(ds), this._tag({
      name: s.ABBR,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command", "title"]
    }), this.editor.dialogs.set(new as(this.editor)), this._command(s.ABBR), this._formatbar({
      label: this._("Abbreviation"),
      command: this.constructor.name,
      key: d.A
    });
  }
}
const ls = {
  "zh-cn": {
    mark: "mark"
  }
};
class cs extends f {
  static get name() {
    return "mark";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(ls), this._tag({
      name: s.MARK,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.MARK), this._formatbar({
      label: this._("mark"),
      command: this.constructor.name,
      key: d.M
    });
  }
}
const hs = {
  "zh-cn": {
    "User Input": "User Input"
  }
};
class us extends f {
  static get name() {
    return "keyboard";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(hs), this._tag({
      name: s.KBD,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.KBD), this._formatbar({
      label: this._("User Input"),
      command: this.constructor.name,
      key: d.K
    });
  }
}
const ms = {
  "zh-cn": {
    "Sample Output": "Sample Output"
  }
};
class gs extends f {
  static get name() {
    return "sample";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(ms), this._tag({
      name: s.SAMP,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.SAMP), this._formatbar({
      label: this._("Sample Output"),
      command: this.constructor.name,
      key: d.O
    });
  }
}
const ps = {
  "zh-cn": {
    Variable: "Variable"
  }
};
class fs extends f {
  static get name() {
    return "variable";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(ps), this._tag({
      name: s.VAR,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command"]
    }), this._command(s.VAR), this._formatbar({
      label: this._("Variable"),
      command: this.constructor.name,
      key: d.V
    });
  }
}
class ws extends D {
  constructor(t) {
    super(t, Qr.name);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Data")).addTextInput("datetime", this._("Machine-readable Datetime"), {
      placeholder: this._("Insert date/time or leave empty to remove it")
    });
  }
}
const bs = {
  "zh-cn": {
    Cancel: "Cancel",
    "Insert date/time or leave empty to remove it": "Insert date/time or leave empty to remove it",
    "Machine-readable Datetime": "Machine-readable Datetime",
    Save: "Save",
    Time: "Time"
  }
};
class Qr extends f {
  static get name() {
    return "time";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(bs), this._tag({
      name: s.TIME,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command", "datetime"]
    }), this.editor.dialogs.set(new ws(this.editor)), this._command(s.TIME), this._formatbar({
      label: this._("Time"),
      command: this.constructor.name,
      key: d.T
    });
  }
}
class ks extends D {
  constructor(t) {
    super(t, Xr.name);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Data")).addTextInput("value", this._("Machine-readable Value"), {
      placeholder: this._("Insert value or leave empty to remove it")
    });
  }
}
const Es = {
  "zh-cn": {
    Cancel: "Cancel",
    Data: "Data",
    "Machine-readable Value": "Machine-readable Value",
    "Insert value or leave empty to remove it": "Insert value or leave empty to remove it",
    Save: "Save"
  }
};
class Xr extends f {
  static get name() {
    return "data";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Es), this._tag({
      name: s.DATA,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command", "value"]
    }), this.editor.dialogs.set(new ks(this.editor)), this._command(s.DATA), this._formatbar({
      label: this._("Data"),
      command: this.constructor.name,
      key: d.J
    });
  }
}
class Ls extends D {
  constructor(t) {
    super(t, Yr.name);
  }
  _prepareForm() {
    this.formCreator.addLegend(this._("Definition")).addTextInput("title", this._("Term"), {
      placeholder: this._("Insert term or leave empty to remove it")
    });
  }
}
const Ts = {
  "zh-cn": {
    Definition: "Definition",
    "Insert term or leave empty to remove it": "Insert term or leave empty to remove it",
    Term: "Term"
  }
};
class Yr extends f {
  static get name() {
    return "definition";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Ts), this._tag({
      name: s.DFN,
      group: u.FORMAT,
      command: this.constructor.name,
      attributes: ["class", "data-command", "title"]
    }), this.editor.dialogs.set(new Ls(this.editor)), this._command(s.DFN), this._formatbar({
      label: this._("Definition"),
      command: this.constructor.name,
      key: d.D
    });
  }
}
var le;
class xs extends y {
  constructor(e, r) {
    var o;
    const i = (o = Object.entries(v).find(([, n]) => n === r)) == null ? void 0 : o[0].toLowerCase();
    if (!i)
      throw new Error(k.INVALID_ARGUMENT);
    super(e, wr.name + "-" + i);
    h(this, le, void 0);
    b(this, le, r);
  }
  execute() {
    const e = this.editor.dom.getActiveElement();
    e != null && e.hasAttribute("data-sortable") && this.editor.dom.sort(e, l(this, le));
  }
}
le = new WeakMap();
const Ms = {
  "zh-cn": {
    "Sort after next element": "Sort after next element",
    "Sort before previous element": "Sort before previous element",
    "Sort to the beginning": "Sort to the beginning",
    "Sort to the end": "Sort to the end"
  }
};
class wr extends f {
  static get name() {
    return "sort";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(Ms), this._focusbar({
      label: this._("Trigger"),
      command: "trigger",
      key: "trigger",
      type: "toggle"
    });
    const t = {
      [v.FIRST]: {
        label: this._("Sort to the beginning"),
        key: d.HOME
      },
      [v.PREV]: {
        label: this._("Sort before previous element"),
        key: d.UP
      },
      [v.NEXT]: {
        label: this._("Sort after next element"),
        key: d.DOWN
      },
      [v.LAST]: { label: this._("Sort to the end"), key: d.END }
    };
    Object.entries(t).forEach(([e, { label: r, key: i }]) => {
      const o = new xs(this.editor, e);
      this.editor.commands.set(o), this._focusbar({
        label: r,
        command: o.name,
        key: i
      });
    });
  }
}
class Cs extends y {
  constructor(t) {
    super(t, br.name);
  }
  execute() {
    const t = this.editor.dom.getActiveElement();
    t != null && t.hasAttribute("data-deletable") && this.editor.dom.delete(t);
  }
}
const As = {
  "zh-cn": {
    Delete: "Delete"
  }
};
class br extends f {
  static get name() {
    return "delete";
  }
  static get dependencies() {
    return [w];
  }
  init() {
    this._i18n(As), this.editor.commands.set(new Cs(this.editor)), this._focusbar({
      label: this._("Delete"),
      command: this.constructor.name,
      key: d.DEL
    });
  }
}
class vs extends q {
  static get minPlugins() {
    return {
      plugins: [
        Ar,
        fe,
        we,
        ke,
        Ee,
        vr,
        Ir,
        ar,
        dr,
        be,
        lr,
        Le,
        Te,
        xe,
        et,
        _r,
        Hr,
        Nr,
        fr,
        wr,
        br
      ]
    };
  }
  static get defaultPlugins() {
    return {
      plugins: [
        Ar,
        fe,
        we,
        ke,
        Ee,
        vr,
        Ir,
        dr,
        ar,
        be,
        lr,
        Le,
        Te,
        xe,
        et,
        Er,
        Io,
        _r,
        Hr,
        Bo,
        fr,
        Fo,
        Po,
        os,
        wr,
        br
      ]
    };
  }
  static get maxPlugins() {
    return {
      plugins: this.defaultPlugins.plugins.concat([
        Zr,
        Lr,
        Nr,
        Wo,
        Zo,
        Qo,
        Yo,
        ts,
        rs,
        ns,
        cs,
        us,
        gs,
        fs,
        Qr,
        Kr,
        Xr,
        Yr
      ])
    };
  }
  static get config() {
    return {
      lang: "en",
      plugins: [],
      browser: {},
      filter: {}
    };
  }
}
export {
  vs as default
};
