import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const BreadCrumb = (props) => {
    const location = useLocation();
    const [breadCrumb, setBreadCrumb] = useState([]);

    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const newBreadCrumb = pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            return { name: segment.charAt(0).toUpperCase() + segment.slice(1), path }; // Capitalize the first letter
        });
        setBreadCrumb(newBreadCrumb);
    }, [location.pathname]);

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">
                                {breadCrumb.length > 0 ? breadCrumb[breadCrumb.length - 1].name : ""}
                            </h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                {breadCrumb.map((crumb) => (
                                    <li key={crumb.path} className="breadcrumb-item"> {/* Use path as the key */}
                                        <Link to={crumb.path}>{crumb.name}</Link>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default BreadCrumb;
