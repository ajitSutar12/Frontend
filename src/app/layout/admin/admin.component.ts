import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../theme/auth/auth.service';
import { DayEndService } from '../../theme/utility/day-end/day-end.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('notificationBottom', [
      state('an-off, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('an-animate',
        style({
          overflow: 'visible',
          height: AUTO_STYLE,
        })
      ),
      transition('an-off <=> an-animate', [
        animate('400ms ease-in-out')
      ])
    ]),
    trigger('slideInOut', [
      state('in', style({
        width: '280px',
        // transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        width: '0',
        // transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('mobileHeaderNavRight', [
      state('nav-off, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('nav-on',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('nav-off <=> nav-on', [
        animate('400ms ease-in-out')
      ])
    ]),
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('mobileMenuTop', [
      state('no-block, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('yes-block',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('no-block <=> yes-block', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})
export class AdminComponent implements OnInit, OnDestroy {
  public animateSidebar: string;
  public navType: string;
  public themeLayout: string;
  public verticalPlacement: string;
  public verticalLayout: string;
  public pcodedDeviceType: string;
  public verticalNavType: string;
  public verticalEffect: string;
  public vnavigationView: string;
  public freamType: string;
  public sidebarImg: string;
  public sidebarImgType: string;
  public layoutType: string;

  public headerTheme: string;
  public pcodedHeaderPosition: string;

  public liveNotification: string;
  public liveNotificationClass: string;

  public profileNotification: string;
  public profileNotificationClass: string;

  public chatSlideInOut: string;
  public innerChatSlideInOut: string;

  public searchWidth: number;
  public searchWidthString: string;

  public navRight: string;
  public windowWidth: number;
  public chatTopPosition: string;

  public toggleOn: boolean;
  public toggleIcon: string;
  public navBarTheme: string;
  public activeItemTheme: string;
  public pcodedSidebarPosition: string;

  public headerFixedTop: string;

  public menuTitleTheme: string;
  public dropDownIcon: string;
  public subItemIcon: string;

  public configOpenRightBar: string;
  public displayBoxLayout: string;
  public isVerticalLayoutChecked: boolean;
  public isSidebarChecked: boolean;
  public isHeaderChecked: boolean;
  public headerFixedMargin: string;
  public sidebarFixedHeight: string;
  public sidebarFixedNavHeight: string;
  public itemBorderStyle: string;
  public subItemBorder: boolean;
  public itemBorder: boolean;

  public isCollapsedSideBar: string;
  public psDisabled: string;
  public perfectDisable: string;

  public config: any;
  public searchInterval: any;

  public meunItemList: any[];
  public menuItem: any;
  public menuListData: any;

  public userData: any;

  public barnchName : any;
  public bankName: any;
  public profilePath: any;

  public currentDate : any;
  public branchID : any;
  disableFlag : string = 'disableflag';
  disableList : any = [];

  scroll = (): void => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 56) {
      if (this.isSidebarChecked === true) {
        this.pcodedSidebarPosition = 'fixed';
      }
      if (this.pcodedDeviceType === 'desktop') {
        this.headerFixedTop = '0';
      }
      this.sidebarFixedNavHeight = '100%';
    } else {
      if (this.pcodedDeviceType === 'desktop') {
        this.headerFixedTop = 'auto';
      }
      this.pcodedSidebarPosition = 'absolute';
      this.sidebarFixedNavHeight = '';
    }
  };

  constructor(public menuItems: MenuItems,private _authService : AuthService,private _dayEndService : DayEndService) {
    this.animateSidebar = '';
    this.navType = 'st2';
    this.themeLayout = 'vertical';
    this.verticalPlacement = 'left';
    this.verticalLayout = 'wide';
    this.pcodedDeviceType = 'desktop';
    this.verticalNavType = 'offcanvas';
    this.verticalEffect = 'shrink';
    this.vnavigationView = 'view1';
    this.freamType = 'theme1';
    this.sidebarImg = 'false';
    this.sidebarImgType = 'img1';
    this.layoutType = 'light'; // light(default) dark(dark)

    this.headerTheme = 'theme1'; // theme1(default)
    this.pcodedHeaderPosition = 'fixed';

    this.headerFixedTop = 'auto';

    this.liveNotification = 'an-off';
    this.profileNotification = 'an-off';

    this.chatSlideInOut = 'out';
    this.innerChatSlideInOut = 'out';

    this.searchWidth = 0;

    this.navRight = 'nav-off';

    this.toggleOn = false;
    this.toggleIcon = 'icon-toggle-right';
    this.navBarTheme = 'themelight1'; // themelight1(default) theme1(dark)
    this.activeItemTheme = 'theme1';
    this.pcodedSidebarPosition = 'fixed';
    this.menuTitleTheme = 'theme1'; // theme1(default) theme10(dark)
    this.dropDownIcon = 'style3';
    this.subItemIcon = 'style7';

    this.displayBoxLayout = 'd-none';
    this.isVerticalLayoutChecked = false;
    this.isSidebarChecked = true;
    this.isHeaderChecked = true;
    this.headerFixedMargin = '56px'; // 56px
    this.sidebarFixedHeight = 'calc(100vh - 60px)'; // calc(100vh - 190px)
    this.itemBorderStyle = 'none';
    this.subItemBorder = true;
    this.itemBorder = true;

    this.isCollapsedSideBar = 'no-block';

    this.perfectDisable = '';

    this.windowWidth = window.innerWidth;


    this.setMenuAttributes(this.windowWidth);
    this.setHeaderAttributes(this.windowWidth);



    // dark theme
    /*this.setLayoutType('dark');*/

    // light-dark
    /*this.setLayoutType('dark');
    this.setNavBarTheme('themelight1');*/

    // dark-light theme
    /*this.setNavBarTheme('theme1');*/

    // box layout
    /*this.setHeaderPosition();
    this.setSidebarPosition();
    this.setVerticalLayout();*/

    // sidebar img
    /*this.setLayoutType('img');*/


    //console.log(this.menuItem[0].main)
    // var filtered = this.menuItem[0].main.filter(function (el) {
    //   return el != null;
    // });

    // this.menuListData = filtered;
    // //console.log(this.menuListData);
  }

  deleteMainMenu(ele) {
    //console.log(ele)
  }

  roleWiseMenuAssign(){
    let flag = this.disableFlag;
    let diablelist = this.disableList;
    //Menu item filter as per user role

    let data: any    = localStorage.getItem('user');
    let result       = JSON.parse(data);
    this.userData    = result;
    this.currentDate = result.branch.syspara.CURRENT_DATE;
    this.branchID    = result.branchId;
    
    let menuData:string = '';
    result.RoleDefine.forEach(ele=>{
      if(menuData == ''){
        menuData = ele.Role.Rolehaspermission.Menus
      }else{
        menuData = menuData + ','+ele.Role.Rolehaspermission.Menus
      }
    })
    let resultArray = result.RoleDefine[0].Role.Rolehaspermission.Menus;

    this.barnchName = result.branch.NAME;
    this.bankName   = result.branch.syspara.BANK_NAME;
    this.profilePath = environment.base_url+'/'+result.PROFILE_PATH;
    //console.log(resultArray);

    let arrayList1 = menuData.split(',');
    var arrayList = arrayList1.map(function (x) {
      return parseInt(x, 10);
    });
    arrayList.sort(function (a, b) { return b - a });
    //console.log(arrayList);

    let menuItemList = this.menuItems.getAll();

    this.meunItemList = menuItemList[0].main;
    var meunItemList = menuItemList[0].main;
    this.meunItemList.forEach(function (element, index) {
      
      if(diablelist.includes(element.id)){
        element['class'] = 'disableflag';
      }else{
        element['class'] = 'disableFlagActive';
      }
      // this.menuItemList[index]['class'] = "disableflag"
      if (arrayList.includes(element.id)) {

        if (element.children != [] && element.children != undefined) {

          element.children.forEach(function (ele, index1) {
            if (arrayList.includes(ele.id)) {
              if (ele.children != [] && ele.children != undefined) {
                ele.children.forEach(function (ele1, index2) {
                  if (arrayList.includes(ele1.id)) {
                  } else {
                    delete meunItemList[index].children[index1].children[index2];
                  }
                });
              }
            } else {
              delete meunItemList[index].children[index1];
            }
          });
        }
      } else {
        delete meunItemList[index];
      }
    });
    this.menuItem = menuItemList;
    
    //console.log(this.menuItem[0].main)
    // this.menuItem[0].main.forEach(ele=>{
    //   if(ele == null){
    //     //console.log('null value')
    //   }
    // })

    var first = this.menuItem[0].main.findIndex(
      function (el) {
        return (el !== null);
      }
    );
    //console.log(this.menuItem[0].main.length);
    for (let i = 0; i < this.menuItem[0].main.length; i++) {
      //console.log(this.menuItem[0].main[i]);
      // this.menuItem[0].main.splice(i,1);
    }

    var arrSor = [];

    this.menuItem[0].main.forEach(function (el) {
      if (el === null) {
        arrSor.push(el);
      } else {
        arrSor.unshift(el);
      }
    });
    this.menuListData = arrSor.reverse();
  }

  ngOnInit() {
    
    this.roleWiseMenuAssign()
    this.setBackgroundPattern('theme1');
 
    interval(2000).subscribe(x => {

        this._dayEndService.checkDayHandOverStatus({date : this.currentDate , branch_id : this.branchID}).subscribe(data=>{
          if(data.flag == 1){
            this.disableList = [66,109];
            this.roleWiseMenuAssign()
          }else{
            this.disableList = [];
            this.roleWiseMenuAssign(  )
          }
        },err=>{
          console.log(err);
        })
    });
  }

  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.setHeaderAttributes(this.windowWidth);

    let reSizeFlag = true;
    if (this.pcodedDeviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 992) {
      reSizeFlag = false;
    } else if (this.pcodedDeviceType === 'phone' && this.windowWidth < 768) {
      reSizeFlag = false;
    }
    /* for check device */
    if (reSizeFlag) {
      this.setMenuAttributes(this.windowWidth);
    }
  }

  setHeaderAttributes(windowWidth) {
    if (windowWidth <= 992) {
      this.navRight = 'nav-off';
    } else {
      this.navRight = 'nav-on';
    }
  }

  setMenuAttributes(windowWidth) {
    if (windowWidth >= 768 && windowWidth <= 992) {
      this.pcodedDeviceType = 'tablet';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'overlay';
      this.toggleIcon = 'icon-toggle-left';
      this.headerFixedTop = 'auto';
      this.headerFixedMargin = '0';
    } else if (windowWidth < 768) {
      this.pcodedDeviceType = 'phone';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'overlay';
      this.toggleIcon = 'icon-toggle-left';
      this.headerFixedTop = 'auto';
      this.headerFixedMargin = '0';
    } else {
      this.pcodedDeviceType = 'desktop';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'shrink';
      this.toggleIcon = 'icon-toggle-right';
      this.headerFixedMargin = '56px';
    }

    /*else if (windowWidth >= 1024 && windowWidth < 1366) {
      this.pcodedDeviceType = 'desktop';
      this.verticalNavType = 'collapsed';
      this.verticalEffect = 'shrink';
      this.toggleIcon = 'icon-toggle-left';
      this.perfectDisable = 'disabled';
      this.sidebarFixedHeight = '100%';
    }*/
  }

  toggleHeaderNavRight() {
    debugger
    this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
    this.chatTopPosition = this.chatTopPosition === 'nav-on' ? '112px' : '';
    if (this.navRight === 'nav-off' && this.innerChatSlideInOut === 'in') {
      this.toggleInnerChat();
    }
    if (this.navRight === 'nav-off' && this.chatSlideInOut === 'in') {
      this.toggleChat();
    }
  }

  toggleLiveNotification() {
    if (this.profileNotification === 'an-animate') {
      this.toggleProfileNotification();
    }

    this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
    this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';

    if (this.liveNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
      this.toggleInnerChat();
    }
    if (this.liveNotification === 'an-animate' && this.chatSlideInOut === 'in') {
      this.toggleChat();
    }
  }

  toggleProfileNotification() {
    if (this.liveNotification === 'an-animate') {
      this.toggleLiveNotification();
    }

    this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
    this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';

    if (this.profileNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
      this.toggleInnerChat();
    }
    if (this.profileNotification === 'an-animate' && this.chatSlideInOut === 'in') {
      this.toggleChat();
    }
  }

  notificationOutsideClick(ele: string) {
    if (ele === 'live' && this.liveNotification === 'an-animate') {
      this.toggleLiveNotification();
    } else if (ele === 'profile' && this.profileNotification === 'an-animate') {
      this.toggleProfileNotification();
    }
  }

  toggleChat() {
    if (this.innerChatSlideInOut === 'in') {
      this.innerChatSlideInOut = 'out';
    } else {
      this.chatSlideInOut = this.chatSlideInOut === 'out' ? 'in' : 'out';
    }
  }

  toggleInnerChat() {
    this.innerChatSlideInOut = this.innerChatSlideInOut === 'out' ? 'in' : 'out';
  }

  searchOn() {
    document.querySelector('#main-search').classList.add('open');
    this.searchInterval = setInterval(() => {
      if (this.searchWidth >= 200) {
        clearInterval(this.searchInterval);
        return false;
      }
      this.searchWidth = this.searchWidth + 15;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }

  searchOff() {
    this.searchInterval = setInterval(() => {
      if (this.searchWidth <= 0) {
        document.querySelector('#main-search').classList.remove('open');
        clearInterval(this.searchInterval);
        return false;
      }
      this.searchWidth = this.searchWidth - 15;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }

  ngOnDestroy() {
    if (this.searchInterval) {
      clearInterval(this.searchInterval);
    }
  }

  toggleOpened(e) {
    
    if (this.windowWidth <= 992) {
      this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
      if (this.navRight === 'nav-on') {
        this.toggleHeaderNavRight();
      }
      this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    } else {
      this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    }
    this.toggleIcon = this.verticalNavType === 'expanded' ? 'icon-toggle-right' : 'icon-toggle-left';
    this.animateSidebar = 'pcoded-toggle-animate';

    if (this.verticalNavType === 'collapsed') {
      this.perfectDisable = 'disabled';
      this.sidebarFixedHeight = '100%';
    } else {
      this.perfectDisable = '';
    }

    if (this.verticalNavType === 'collapsed' && this.isHeaderChecked === false) {
      this.setSidebarPosition();
    }

    setTimeout(() => {
      this.animateSidebar = '';
    }, 500);
  }

  onClickedOutsideSidebar(e: Event) {
    if ((this.windowWidth <= 992 && this.toggleOn && this.verticalNavType !== 'offcanvas') || this.verticalEffect === 'overlay') {
      this.toggleOn = true;
      this.verticalNavType = 'offcanvas';
      this.toggleIcon = 'icon-toggle-left';
    }
  }

  toggleRightbar() {
    this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
  }

  setNavBarTheme(theme: string) {
    if (theme === 'themelight1') {
      this.navBarTheme = 'themelight1';
      this.menuTitleTheme = 'theme1';
      this.sidebarImg = 'false';
    } else {
      this.menuTitleTheme = 'theme9';
      this.navBarTheme = 'theme1';
      this.sidebarImg = 'false';
    }
  }

  setLayoutType(type: string) {
    if (type === 'dark') {
      this.headerTheme = 'theme1';
      this.navBarTheme = 'theme1';
      this.activeItemTheme = 'theme1';
      this.freamType = 'theme1';
      document.querySelector('body').classList.add('dark');
      this.setBackgroundPattern('theme1');
      this.menuTitleTheme = 'theme9';
      this.layoutType = type;
      this.sidebarImg = 'false';
    } else if (type === 'light') {
      this.headerTheme = 'theme1';
      this.navBarTheme = 'themelight1';
      this.menuTitleTheme = 'theme1';
      this.activeItemTheme = 'theme1';
      this.freamType = 'theme1';
      document.querySelector('body').classList.remove('dark');
      this.setBackgroundPattern('theme1');
      this.layoutType = type;
      this.sidebarImg = 'false';
    } else if (type === 'img') {
      this.sidebarImg = 'true';
      this.navBarTheme = 'themelight1';
      this.menuTitleTheme = 'theme1';
      this.freamType = 'theme1';
      document.querySelector('body').classList.remove('dark');
      this.setBackgroundPattern('theme1');
      this.activeItemTheme = 'theme1';
    }
  }

  setVerticalLayout() {
    this.isVerticalLayoutChecked = !this.isVerticalLayoutChecked;
    if (this.isVerticalLayoutChecked) {
      this.verticalLayout = 'box';
      this.displayBoxLayout = '';
      this.pcodedHeaderPosition = 'relative';
      this.pcodedSidebarPosition = 'absolute';
      this.headerFixedMargin = '';
    } else {
      this.verticalLayout = 'wide';
      this.displayBoxLayout = 'd-none';
      this.pcodedHeaderPosition = 'fixed';
      this.pcodedSidebarPosition = 'fixed';
      this.headerFixedMargin = '56px';
    }
  }

  setBackgroundPattern(pattern: string) {
    document.querySelector('body').setAttribute('themebg-pattern', pattern);
    // this.menuTitleTheme = this.freamType = this.activeItemTheme = this.headerTheme = pattern;
  }

  setSidebarPosition() {
    if (this.verticalNavType !== 'collapsed') {
      this.isSidebarChecked = !this.isSidebarChecked;
      this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
      this.sidebarFixedHeight = this.isSidebarChecked === true ? 'calc(100vh - 56px)' : '100%';
      if (this.isHeaderChecked === false) {
        window.addEventListener('scroll', this.scroll, true);
        window.scrollTo(0, 0);
      }
    }
  }

  setHeaderPosition() {
    this.isHeaderChecked = !this.isHeaderChecked;
    this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
    this.headerFixedMargin = this.isHeaderChecked === true ? '56px' : '';
    if (this.isHeaderChecked === false) {
      window.addEventListener('scroll', this.scroll, true);
      window.scrollTo(0, 0);
    } else {
      window.removeEventListener('scroll', this.scroll, true);
      if (this.pcodedDeviceType === 'desktop') {
        this.headerFixedTop = 'auto';
      }
      this.pcodedSidebarPosition = 'fixed';
      if (this.verticalNavType !== 'collapsed') {
        this.sidebarFixedHeight = this.isSidebarChecked === true ? 'calc(100vh - 56px)' : 'calc(100vh + 56px)';
      }
    }
  }

  toggleOpenedSidebar() {
    this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
    if (this.verticalNavType !== 'collapsed') {
      this.sidebarFixedHeight = this.isCollapsedSideBar === 'yes-block' ? 'calc(100vh - 56px)' : 'calc(100vh - 56px)';
    }
  }

  hoverOutsideSidebar() {
    if (this.verticalNavType === 'collapsed') {
      const mainEle = document.querySelectorAll('.pcoded-trigger');
      for (let i = 0; i < mainEle.length; i++) {
        mainEle[i].classList.remove('pcoded-trigger');
      }
    }
  }

  fireClick(e) {
    if (this.verticalNavType === 'collapsed') {
      const parentEle = e.target.parentNode.parentNode;
      if (parentEle.classList.contains('pcoded-trigger')) {
        const subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < subEle.length; i++) {
          if (subEle[i].classList.contains('pcoded-trigger')) {
            subEle[i].classList.remove('pcoded-trigger');
          }
        }
      } else {
        e.target.click();
      }
    }
  }

  fireClickLeave(e) {
    if (this.verticalNavType === 'collapsed') {
      const parentEle = <HTMLElement>e.target.parentNode.parentNode;
      const subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
      for (let i = 0; i < subEle.length; i++) {
        if (subEle[i].classList.contains('pcoded-trigger')) {
          subEle[i].classList.remove('pcoded-trigger');
        }
      }
    }
  }

  logout(){
    window.close();
    let user = JSON.parse(localStorage.getItem('user'));

    this._authService.logout(user.id).subscribe(data=>{

    })
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    

  }

}
