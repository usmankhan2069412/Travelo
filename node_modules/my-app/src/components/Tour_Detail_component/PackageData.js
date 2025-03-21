// packagesData.js
import PackageDetail from "../Tour_Packages/PackageDetail";

const packagesData = PackageDetail.map(pkg => ({
    id: pkg.id,
    name: pkg.name,
    description: pkg.description,
    price: pkg.price,
    imageUrl: pkg.imageUrl,
    activities: pkg.activities, // Pull activities from PackageDetail
    includes: pkg.includes, // Pull includes from PackageDetail
    notInclude: pkg.notInclude, // Pull the not include package details from PackageDetail
    safety: pkg.safety, // Pull safety measures from PackageDetail
    location: pkg.location // Pull location from PackageDetail
}));

export default packagesData;
