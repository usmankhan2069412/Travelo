import AdminNav from "./AdminNav";
import LeftSideBar from "./LeftSideBar";
import BreadCrumb from "./BreadCrumb";
import AdminFooter from "./AdminFooter";

const Layout = () => {
    return (
        <>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"/>
            <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css"/>
            <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
            <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"/>
            <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css"/>
            <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css"/>
            <link rel="stylesheet" href="dist/css/adminlte.min.css"/>
            <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css"/>
            <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css"/>
            <link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css"/>

            <body className="hold-transition sidebar-mini layout-fixed">
            <div className="wrapper">
                {/* <div className="preloader flex-column justify-content-center align-items-center">
                    <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60"
                         width="60"/>
                </div> */}
                <AdminNav/>
                <LeftSideBar/>
                <BreadCrumb/>
                <AdminFooter/>
            </div>

            </body>
        </>
    )
};

export default Layout;