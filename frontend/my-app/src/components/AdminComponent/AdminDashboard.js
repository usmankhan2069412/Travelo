import { Link } from "react-router-dom";
import { useState } from "react";
import { BarChart, LineChart, PieChart } from "recharts";

const AdminDashboard = () => {
    // Sample data - in a real application, this would come from your API/backend
    const [bookingData] = useState([
        { name: 'Jan', bookings: 65, revenue: 4200, customers: 42 },
        { name: 'Feb', bookings: 59, revenue: 3800, customers: 38 },
        { name: 'Mar', bookings: 80, revenue: 5100, customers: 61 },
        { name: 'Apr', bookings: 81, revenue: 5400, customers: 64 },
        { name: 'May', bookings: 95, revenue: 6200, customers: 75 }
    ]);

    const [popularDestinations] = useState([
        { name: 'Paris', bookings: 128, percentage: 24 },
        { name: 'Bali', bookings: 94, percentage: 18 },
        { name: 'Tokyo', bookings: 76, percentage: 14 },
        { name: 'New York', bookings: 69, percentage: 13 },
        { name: 'Rome', bookings: 62, percentage: 12 }
    ]);

    return (
        <>
            <section className="content">
                <div className="container-fluid">
                   {/* Key Metrics Cards */}
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>237</h3>
                                    <p>New Bookings</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-suitcase"></i>
                                </div>
                                <Link to="/admin/bookings" className="small-box-footer">
                                    View bookings <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>$18.5k</h3>
                                    <p>Monthly Revenue</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                                <Link to="/admin/revenue" className="small-box-footer">
                                    Revenue details <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>85</h3>
                                    <p>New Travelers</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <Link to="/admin/customers" className="small-box-footer">
                                    Customer details <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>24</h3>
                                    <p>Support Tickets</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-ticket-alt"></i>
                                </div>
                                <Link to="/admin/support" className="small-box-footer">
                                    View tickets <i className="fas fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="row">
                        {/* Left Column */}
                        <section className="col-lg-7 connectedSortable">
                            {/* Booking Trends */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="fas fa-chart-line mr-1"></i>
                                        Booking Trends
                                    </h3>
                                    <div className="card-tools">
                                        <ul className="nav nav-pills ml-auto">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Monthly</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#sales-chart" data-toggle="tab">Weekly</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content p-0">
                                        <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: '300px' }}>
                                            <canvas id="revenue-chart-canvas" height="300" style={{ height: '300px' }}></canvas>
                                            {/* Chart would be initialized with real data via JavaScript */}
                                        </div>
                                        <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: '300px' }}>
                                            <canvas id="sales-chart-canvas" height="300" style={{ height: '300px' }}></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Bookings */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="fas fa-bookmark mr-1"></i>
                                        Recent Bookings
                                    </h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table m-0">
                                            <thead>
                                                <tr>
                                                    <th>Booking ID</th>
                                                    <th>Customer</th>
                                                    <th>Destination</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><a href="#">BK9842</a></td>
                                                    <td>Emma Wilson</td>
                                                    <td>Bali, Indonesia</td>
                                                    <td>May 24, 2025</td>
                                                    <td><span className="badge badge-success">Confirmed</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#">BK9841</a></td>
                                                    <td>James Carter</td>
                                                    <td>Paris, France</td>
                                                    <td>June 10, 2025</td>
                                                    <td><span className="badge badge-warning">Pending Payment</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#">BK9840</a></td>
                                                    <td>Alex Johnson</td>
                                                    <td>Tokyo, Japan</td>
                                                    <td>July 15, 2025</td>
                                                    <td><span className="badge badge-success">Confirmed</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#">BK9839</a></td>
                                                    <td>Sarah Parker</td>
                                                    <td>New York, USA</td>
                                                    <td>May 30, 2025</td>
                                                    <td><span className="badge badge-info">In Progress</span></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#">BK9838</a></td>
                                                    <td>Michael Brown</td>
                                                    <td>Rome, Italy</td>
                                                    <td>June 5, 2025</td>
                                                    <td><span className="badge badge-danger">Canceled</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer clearfix">
                                    <Link to="/admin/bookings" className="btn btn-sm btn-primary float-right">
                                        View All Bookings
                                    </Link>
                                </div>
                            </div>

                            {/* Upcoming Tours */}
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="fas fa-map-marked-alt mr-1"></i>
                                        Upcoming Tours
                                    </h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="todo-list" data-widget="todo-list">
                                        <li>
                                            <span className="handle">
                                                <i className="fas fa-ellipsis-v"></i>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </span>
                                            <div className="icheck-primary d-inline ml-2">
                                                <input type="checkbox" value="" name="todo1" id="todoCheck1" />
                                                <label htmlFor="todoCheck1"></label>
                                            </div>
                                            <span className="text">European Highlights Tour</span>
                                            <small className="badge badge-danger"><i className="far fa-clock"></i> 3 days</small>
                                            <div className="tools">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fas fa-ellipsis-v"></i>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </span>
                                            <div className="icheck-primary d-inline ml-2">
                                                <input type="checkbox" value="" name="todo2" id="todoCheck2" />
                                                <label htmlFor="todoCheck2"></label>
                                            </div>
                                            <span className="text">Tropical Paradise Cruise</span>
                                            <small className="badge badge-warning"><i className="far fa-clock"></i> 1 week</small>
                                            <div className="tools">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fas fa-ellipsis-v"></i>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </span>
                                            <div className="icheck-primary d-inline ml-2">
                                                <input type="checkbox" value="" name="todo3" id="todoCheck3" />
                                                <label htmlFor="todoCheck3"></label>
                                            </div>
                                            <span className="text">Eastern Asia Adventure</span>
                                            <small className="badge badge-info"><i className="far fa-clock"></i> 2 weeks</small>
                                            <div className="tools">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-o"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="handle">
                                                <i className="fas fa-ellipsis-v"></i>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </span>
                                            <div className="icheck-primary d-inline ml-2">
                                                <input type="checkbox" value="" name="todo4" id="todoCheck4" />
                                                <label htmlFor="todoCheck4"></label>
                                            </div>
                                            <span className="text">Northern Lights Expedition</span>
                                            <small className="badge badge-success"><i className="far fa-clock"></i> 1 month</small>
                                            <div className="tools">
                                                <i className="fas fa-edit"></i>
                                                <i className="fas fa-trash-o"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer clearfix">
                                    <button type="button" className="btn btn-primary float-right">
                                        <i className="fas fa-plus"></i> Add New Tour
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Right Column */}
                        <section className="col-lg-5 connectedSortable">
                            {/* Popular Destinations */}
                            <div className="card bg-gradient-primary">
                                <div className="card-header border-0">
                                    <h3 className="card-title">
                                        <i className="fas fa-map-marker-alt mr-1"></i>
                                        Popular Destinations
                                    </h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-primary btn-sm daterange" title="Date range">
                                            <i className="far fa-calendar-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="world-map" style={{ height: '250px', width: '100%' }}>
                                        {/* Interactive map would be initialized here */}
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <div className="row">
                                        {popularDestinations.slice(0, 3).map((dest, index) => (
                                            <div key={index} className="col-4 text-center">
                                                <div id={`sparkline-${index + 1}`}></div>
                                                <div className="text-white">{dest.name}</div>
                                                <div className="text-white">{dest.bookings} bookings</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                           

                            {/* Sales Performance */}
                            <div className="card bg-gradient-info">
                                <div className="card-header border-0">
                                    <h3 className="card-title">
                                        <i className="fas fa-th mr-1"></i>
                                        Package Sales
                                    </h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <canvas className="chart" id="line-chart" style={{ minHeight: '250px', height: '250px', maxHeight: '250px', maxWidth: '100%' }}></canvas>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <input type="text" className="knob" data-readonly="true" value="35" data-width="60" data-height="60" data-fgColor="#39CCCC" />
                                            <div className="text-white">Adventure Tours</div>
                                        </div>
                                        <div className="col-4 text-center">
                                            <input type="text" className="knob" data-readonly="true" value="40" data-width="60" data-height="60" data-fgColor="#39CCCC" />
                                            <div className="text-white">Luxury Travel</div>
                                        </div>
                                        <div className="col-4 text-center">
                                            <input type="text" className="knob" data-readonly="true" value="25" data-width="60" data-height="60" data-fgColor="#39CCCC" />
                                            <div className="text-white">Family Vacation</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Calendar & Events */}
                            <div className="card bg-gradient-success">
                                <div className="card-header border-0">
                                    <h3 className="card-title">
                                        <i className="far fa-calendar-alt"></i>
                                        Upcoming Schedule
                                    </h3>
                                    <div className="card-tools">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" data-offset="-52">
                                                <i className="fas fa-bars"></i>
                                            </button>
                                            <div className="dropdown-menu" role="menu">
                                                <a href="#" className="dropdown-item">Add new event</a>
                                                <a href="#" className="dropdown-item">Clear events</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#" className="dropdown-item">View calendar</a>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-success btn-sm" data-card-widget="collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div id="calendar" style={{ width: '100%' }}></div>
                                </div>
                                <div className="card-footer bg-transparent">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <button type="button" className="btn btn-success btn-sm">
                                                <i className="fas fa-plus"></i> Schedule New Tour
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminDashboard;