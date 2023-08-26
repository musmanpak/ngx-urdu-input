import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, NgZone, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxInputUrdu]'
})
export class NgxUrduInputDirective implements AfterViewInit, OnDestroy {

  private _listener: () => void;

  constructor(
    private zn: NgZone,
    private el: ElementRef,
    private r2: Renderer2,
    private cdr: ChangeDetectorRef
  ) {
  }


  ngAfterViewInit() {
    this._listener = this.r2.listen(this.el.nativeElement, 'keypress', this.captureUrduEvent.bind(this))
    this.el.nativeElement.style.direction = 'rtl';
    this.el.nativeElement.style.textAlign = 'right';
    this.el.nativeElement.classList.add('ngx-urdu-input')
  }

  ngOnDestroy() {
    if (this._listener) {
      this._listener();
    }
  }

  getUrduUnicode(temp: any) {
    let keyChar = -1;

    switch (temp) {
      case aK_ALIF:
        keyChar = ALIF;
        break;
      case aK_ALMAD:
        keyChar = ALMAD;
        break;
      case aK_BAY:
        keyChar = BAY;
        break;

      case aK_PAY:
        keyChar = PAY;
        break;

      case aK_TAY:
        keyChar = TAY;
        break;
      case aK_TTAY:
        keyChar = TTAY;
        break;
      case aK_SAY:
        keyChar = SAY;
        break;

      case aK_JEEM:
        keyChar = JEEM;
        break;
      case aK_CHAY:
        keyChar = CHAY;
        break;
      case aK_HAY:
        keyChar = HAY;
        break;

      case aK_KHAY:
        keyChar = KHAY;
        break;
      case aK_DAL:
        keyChar = DAL;
        break;
      case aK_DDAL:
        keyChar = DDAL;
        break;

      case aK_ZAL:
        keyChar = ZAL;
        break;
      case aK_RAY:
        keyChar = RAY;
        break;
      case aK_RRAY:
        keyChar = RRAY;
        break;
      case aK_ZAY:
        keyChar = ZAY;
        break;
      case aK_XAY:
        keyChar = XAY;
        break;
      case aK_SEEN:
        keyChar = SEEN;
        break;
      case aK_SHEEN:
        keyChar = SHEEN;
        break;
      case aK_SAAD:
        keyChar = SAAD;
        break;
      case aK_ZAAD:
        keyChar = ZAAD;
        break;
      case aK_TOAY:
        keyChar = TOAY;
        break;
      case aK_ZOAY:
        keyChar = ZOAY;
        break;

      case aK_AIN:
        keyChar = AIN;
        break;
      case aK_GHAIN:
        keyChar = GHAIN;
        break;

      case aK_FAY:
        keyChar = FAY;
        break;

      case aK_QAAF:
        keyChar = QAAF;
        break;

      case aK_KAAF:
        keyChar = KAAF;
        break;

      case aK_GAAF:
        keyChar = GAAF;
        break;
      case aK_LAAM:
        keyChar = LAAM;
        break;

      case aK_MEEM:
        keyChar = MEEM;
        break;
      case aK_NOON:
        keyChar = NOON;
        break;
      case aK_NOONG:
        keyChar = NOONG;
        break;
      case aK_WAO:
        keyChar = WAO;
        break;
      case aK_HAA:
        keyChar = HAA;
        break;
      case aK_DCHASHMI:
        keyChar = DCHASHMI;
        break;
      case aK_HAMZAYA:
        keyChar = HAMCY;
        break;
      case aK_CHOTIYA:
        keyChar = CHOTIYA;
        break;
      case aK_BARRIYA:
        keyChar = BARRIYA;
        break;
      case aK_HAMZA:
        keyChar = HAMZA;
        break;
      case aK_LPREN:
        keyChar = LPREN;
        break;
      case aK_RPREN:
        keyChar = RPREN;
        break;
      case aK_SQOTMRK:
        keyChar = RSQOTMRK;
        break;
      case aK_DQOTMRK:
        keyChar = RDQOTMRK;
        break;
      case aK_FULSTOP:
        keyChar = FULSTOP;
        break;
      case aK_QMARK:
        keyChar = AQMARK;
        break;
      case aK_SEMICOL:
        keyChar = ASEMICOL;
        break;
      case aK_COMA:
        keyChar = ACOMA;
        break;
      case aK_NOT:
        keyChar = NOT;
        break;
      case aK_COLON:
        keyChar = COLON;
        break;
      case aSPACE:
        keyChar = 32;
        break;
      case aENTER:
        keyChar = 13;
        break;

      case aK_ZERO:
        keyChar = ZERO;
        break;
      case aK_ONE:
        keyChar = ONE;
        break;
      case aK_TWO:
        keyChar = TWO;
        break;
      case aK_THREE:
        keyChar = THREE;
        break;
      case aK_FOUR:
        keyChar = FOUR;
        break;
      case aK_FIVE:
        keyChar = FIVE;
        break;
      case aK_SIX:
        keyChar = SIX;
        break;
      case aK_SEVEN:
        keyChar = SEVEN;
        break;
      case aK_EIGHT:
        keyChar = EIGHT;
        break;
      case aK_NINE:
        keyChar = NINE;
        break;
      default:
        return false;
        break;
    } //case

    return keyChar;
  } //function

  captureUrduEvent(evt: { target: any; srcElement: any; }) {
    let target: any;
    if (evt.target) target = evt.target;
    else target = evt.srcElement; //for IE
    this.zn.run(() => {
      this.KeyPress(target, evt);
    });
  }

  getNextUrduLayoutState(lastInput: string, currentInput: string) {
    return String.fromCharCode(
      <number>this.getUrduUnicode(currentInput)
    );
  }

  KeyPress(textbox: any, evt: any): void {
    let keyCode: number;
    let keyChar: string;
    if (evt) {
      keyCode = evt.keyCode;
      if (evt.ctrlKey == true || evt.altKey == true || keyCode === 0) {
        return;
      }
    } else {
      alert("Wrong version");
      return;
    }
    evt.returnValue = false;
    keyChar = String.fromCharCode(keyCode);

    if (this.isValidAlphabet(keyChar)) {
      const apnaChar = this.getNextUrduLayoutState(this.findLastChar(textbox), keyChar);
      if (apnaChar == keyChar) {
        this.replaceEndOfWord(textbox, this.findLastChar(textbox));
      }

      this.insertAtCaret(textbox, apnaChar);
      if (evt.preventDefault) {
        evt.preventDefault();
        evt.cancelBubble = true;
      }
    }
    this.cdr.detectChanges();
  }


  isValidAlphabet(character: string): boolean {
    return this.getNextUrduLayoutState("", character) != "";

  }

  replaceEndOfWord(textbox: any, character: string): void {
    const nayaChar: string = String.fromCharCode(character.charCodeAt(0));

    if (nayaChar !== character) {
      this.eraseLastChar(textbox);
      this.insertAtCaret(textbox, nayaChar);
    }
  }

  findLastChar(textbox: any): string {
    if (textbox.createTextRange) {
      let range: any;
      if ((document as any).selection) {
        range = (document as any).selection.createRange().duplicate();
      } else {
        range = textbox.createTextRange();
      }
      range.moveStart("character", -1);
      return range.text;
    } else if (textbox.selectionStart !== undefined) {
      let startPos = textbox.selectionStart;
      let endPos: number | null = textbox.selectionEnd;
      startPos = startPos - 1;
      endPos = startPos + 1;
      return textbox.value.substring(startPos, endPos);
    }
    return "";
  }

  eraseLastChar(textbox: any) {
    if (textbox.createTextRange) {
      var range = (document as any).selection.createRange().duplicate();
      range.moveStart("character", -1);
      range.text = "";
    } else {
      var txtarea = textbox;
      var startPos = txtarea.selectionStart - 1;
      var endPos = txtarea.selectionEnd;
      var scrollTop = txtarea.scrollTop;
      txtarea.value =
        txtarea.value.substring(0, startPos) +
        txtarea.value.substring(endPos, txtarea.value.length);
      var cPos = startPos;
      txtarea.selectionStart = cPos;
      txtarea.selectionEnd = cPos;
      txtarea.scrollTop = scrollTop;
    }
  }

  insertAtCaret(textbox: any, text: any) {
    var txtarea = textbox;

    if ((document as any).selection) {
      var CaretPos;
      if (textbox.createTextRange) {
        CaretPos = (document as any).selection.createRange().duplicate();
        CaretPos.text = text;
      }
      //handling of ENTER in IE for textarea needs to be handled
      //alert("CaretPos="+CaretPos.text);
    } else if (txtarea.selectionStart || txtarea.selectionStart == "0") {
      var startPos = txtarea.selectionStart;
      var endPos = txtarea.selectionEnd;
      var scrollTop = txtarea.scrollTop;
      var myText = txtarea.value.substring(startPos, endPos);
      //alert("myText="+myText);
      if (!myText) {
        myText = text;
      }
      txtarea.value =
        txtarea.value.substring(0, startPos) +
        text +
        txtarea.value.substring(endPos, txtarea.value.length);
      txtarea.focus();
      var cPos = startPos + text.length;
      txtarea.selectionStart = cPos;
      txtarea.selectionEnd = cPos;
      txtarea.scrollTop = scrollTop;
    }
  }


}


/*Unicode Alphabet*/
const ALLAH = 0xfdf2;
const ALIF = 0x0627;
const ALMAD = 0x0622;
const BAY = 0x0628;
const PAY = 0x067e;
const TAY = 0x062a;
const TTAY = 0x0679;
const SAY = 0x062b;
const JEEM = 0x062c;
const CHAY = 0x0686;
const HAY = 0x062d;
const KHAY = 0x062e;
const DAL = 0x062f;
const DDAL = 0x0688;
const ZAL = 0x0630;
const RAY = 0x0631;
const RRAY = 0x0691;
const ZAY = 0x0632;
const XAY = 0x0698;
const SEEN = 0x0633;
const SHEEN = 0x0634;
const SAAD = 0x0635;
const ZAAD = 0x0636;
const TOAY = 0x0637;
const ZOAY = 0x0638;
const AIN = 0x0639;
const GHAIN = 0x063a;
const FAY = 0x0641;
const QAAF = 0x0642;
const KAAF = 0x06a9;
const GAAF = 0x06af;
const LAAM = 0x0644;
const MEEM = 0x0645;
const NOON = 0x0646;
const NOONG = 0x06ba;
const WAO = 0x0648;
const WAOHAMZ = 0x0624;
const HAA = 0x06c1;
const HAMZA = 0x0621;
const HAMCY = 0x0626; //Hamza on chootee yay
const CHOTIYA = 0x06cc;
const BARRIYA = 0x06d2;
const DCHASHMI = 0x06be;

/*Unicode Digits*/
const ZERO = 0x6f0;
const ONE = 0x6f1;
const TWO = 0x6f2;
const THREE = 0x6f3;
const FOUR = 0x6f4;
const FIVE = 0x6f5;
const SIX = 0x6f6;
const SEVEN = 0x6f7;
const EIGHT = 0x6f8;
const NINE = 0x6f9;

/*Unicode Arabic Mathematical Symbols*/
const PLUS = 0x002b;
const MINUS = 0x002d;
const MUL = 0x00d7;
const DIV = 0x00f7;
const PERC = 0x066a;
const LPREN = 0x0028;
const RPREN = 0x0029;

/*Unicode Arabic Aarab Symbols*/
const PAISH = 0x064f;
const ZAIR = 0x0650;
const ZABAR = 0x064e;
const DOPAISH = 0x064c;
const DOZAIR = 0x064d;
const DOZABAR = 0x064b;
const GAZM = 0x0652;
const MAD = 0x06e4;
const SHAD = 0x0651;
const SHADZAIR = 0xfc62;
const SHADPAISH = 0xfc61;
const HIHAMZA = 0x0674;
const KHARIZAB = 0x0670;

/*Unicode Arabic Punctuations*/
const RSQOTMRK = 0x2019;
const LSQOTMRK = 0x2018;
const RDQOTMRK = 0x201d;
const LDQOTMRK = 0x201c;
const DECSEP = 0x0201a;
const FULSTOP = 0x06d4;
const AQMARK = 0x061f;
const ASEMICOL = 0x061b;
const ACOMA = 0x060c;
const NOT = 0x0021;
const QUOT = 0x0022;
const COLON = 0x003a;
const SEMICOL = 0x003b;

/*Keyboard Keys*/
const K_ALIF = 97; //'a';
const K_ALMAD = 65; //'A';
const K_BAY = 98; //'b';
const K_PAY = 112; //'p';
const K_TAY = 116; //'t';
const K_TTAY = 84; //'T';
const K_SAY = 67; //'C';
const K_JEEM = 106; //'j';
const K_CHAY = 99; //'c';
const K_HAY = 72; //'H';
const K_KHAY = 75; //'K';
const K_DAL = 100; //'d';
const K_DDAL = 68; //'D';
const K_ZAL = 90; //'Z';
const K_RAY = 114; //'r';
const K_RRAY = 82; //'R';
const K_ZAY = 122; //'z';
const K_XAY = 88; //'X';
const K_SEEN = 115; //'s';
const K_SHEEN = 120; //'x';
const K_SAAD = 83; //'S';
const K_ZAAD = 74; //'J';
const K_TOAY = 118; //'v';
const K_ZOAY = 86; //'V';
const K_AIN = 101; //'e';
const K_GHAIN = 71; //'G';
const K_FAY = 102; //'f';
const K_QAAF = 113; //'q';
const K_KAAF = 107; //'k';
const K_GAAF = 103; //'g';
const K_LAAM = 108; //'l';
const K_MEEM = 109; //'m';
const K_NOON = 110; //'n';
const K_NOONG = 78; //'N';
const K_WAO = 119; //'w';
const K_HAA = 111; //'o';
const K_DCHASHMI = 104; //'h';
const K_HAMZA = 117; //'u';
const K_CHOTIYA = 105; //'i';
const K_BARRIYA = 121; //'y';
const K_HAMZAYA = 85; //'U';

/*Keyboard Digits*/
const K_ZERO = 48; //'0';
const K_ONE = 49; //'1';
const K_TWO = 50; //'2';
const K_THREE = 51; //'3';
const K_FOUR = 52; //'4';
const K_FIVE = 53; //'5';
const K_SIX = 54; //'6';
const K_SEVEN = 55; //'7';
const K_EIGHT = 56; //'8';
const K_NINE = 57; //'9';

/*Key Board Arithmetic Operators*/
const K_PLUS = 43; //'+';
const K_MINUS = 45; //'-';
const K_MUL = 42; //'*';
const K_DIV = 47; //'/';
const K_PERC = 37; //'%';
const K_LPREN = 41; //')';
const K_RPREN = 40; //'(';
const K_EQ = 61; //'=';

/*Keyboard Punctuation*/
const K_SQOTMRK = 44; //'\'';
const K_DQOTMRK = 34; //'"';
const K_FULSTOP = 46; //'.';
const K_QMARK = 63; //'?';
const K_SEMICOL = 59; //';';
const K_COMA = 44; //',';
const K_NOT = 33; //'!';
const K_COLON = 58; //':';

const SPACE = 32; //' ';
const ENTER = 13; //'\r';
const NLINE = "\n";
const TAB = 9; //'\t';

/*Ascii Keys*/
const aK_ALIF = "a";
const aK_ALMAD = "A";
const aK_BAY = "b";
const aK_PAY = "p";
const aK_TAY = "t";
const aK_TTAY = "T";
const aK_SAY = "C";
const aK_JEEM = "j";
const aK_CHAY = "c";
const aK_HAY = "H";
const aK_KHAY = "K";
const aK_DAL = "d";
const aK_DDAL = "D";
const aK_ZAL = "Z";
const aK_RAY = "r";
const aK_RRAY = "R";
const aK_ZAY = "z";
const aK_XAY = "X";
const aK_SEEN = "s";
const aK_SHEEN = "x";
const aK_SAAD = "S";
const aK_ZAAD = "J";
const aK_TOAY = "v";
const aK_ZOAY = "V";
const aK_AIN = "e";
const aK_GHAIN = "G";
const aK_FAY = "f";
const aK_QAAF = "q";
const aK_KAAF = "k";
const aK_GAAF = "g";
const aK_LAAM = "l";
const aK_MEEM = "m";
const aK_NOON = "n";
const aK_NOONG = "N";
const aK_WAO = "w";
const aK_HAA = "o";
const aK_DCHASHMI = "h";
const aK_HAMZA = "u";
const aK_CHOTIYA = "i";
const aK_BARRIYA = "y";
const aK_HAMZAYA = "U";

/*Ascii Digits*/
const aK_ZERO = "0";
const aK_ONE = "1";
const aK_TWO = "2";
const aK_THREE = "3";
const aK_FOUR = "4";
const aK_FIVE = "5";
const aK_SIX = "6";
const aK_SEVEN = "7";
const aK_EIGHT = "8";
const aK_NINE = "9";

/*Ascii Arithmetic Operators*/
const aK_PLUS = "+";
const aK_MINUS = "-";
const aK_MUL = "*";
const aK_DIV = "/";
const aK_PERC = "%";
const aK_LPREN = ")";
const aK_RPREN = "(";
const aK_EQ = "=";

/*Ascii Punctuation*/
const aK_SQOTMRK = "'";
const aK_DQOTMRK = '"';
const aK_FULSTOP = ".";
const aK_QMARK = "?";
const aK_SEMICOL = ";";
const aK_COMA = ",";
const aK_NOT = "!";
const aK_COLON = ":";

const aSPACE = " ";
const aENTER = "\r";
const aNLINE = "\n";
const aTAB = "\t";


