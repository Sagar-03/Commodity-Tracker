<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome, Admin</title>
    <link rel="stylesheet" href="admin.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <nav>
            <div class="red">
                <div class="company">
                    <img src="site logo white.png" alt="Site Logo">
                    <p class="site">Commodity Tracker</p>
                </div>
                <div class="user">
                    <img src="user image white.png" alt="User Image">
                    <p class="name">Sagar Kumar Jha</p>
                    <p class="gmail">sagarkumarjha@gmail.com</p>
                </div>
                <ul class="buttons">
                    <li class="home">
                        <div>
                            <img src="home icon.png" alt="Home Icon">
                            <a href="/home">Home</a>
                        </div>
                    </li>
                    <li class="data">
                        <div>
                            <img src="data icon.png" alt="Data Icon">
                            <a href="/traderdata">Trader Data</a>
                        </div>
                    </li>
                    <li class="report">
                        <div>
                            <img src="report icon.png" alt="Report Icon">
                            <a href="/report">Reports</a>
                        </div>
                    </li>
                    <li class="signout">
                        <div>
                            <img src="sign out icon.png" alt="Sign Out Icon">
                            <a href="/home">Sign Out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <div class="info">
            <div class="welcome">
                <p>Welcome, Admin</p>
            </div>

            <div class="filter">
                <div class="search">
                    <img src="search icon.png" alt="Search Icon">
                    <input type="search" id="first" placeholder="  Search by trader name" onkeyup="Search()">
                </div>

                <div class="Area">
                    <input placeholder="Search by Area" id="area" onkeyup="Search()">                       
                </div>

                <div class="flag">
                    <select name="flag" id="flag">
                        <option value="null">Flag</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                    </select>
                    <img src="filter icon.png" alt="Filter Icon">
                </div>
            </div>
            <table id="myTable">
                <tr class="table-header">
                    <th class="name">Trader Name</th>
                    <th class="license">License No.</th>
                    <th class="contact">Contact No.</th>
                    <th class="flag">Flag</th>
                    <th class="area">Area</th>
                </tr>

                <tr class="row">
                    <td class="name"><a href="#">Sahdev Singh</a></td>
                    <td class="license"><p>R0344-86816-43681</p></td>
                    <td class="contact"><p>+91 0921456704</p></td>
                    <td class="flag"><img src="../images/red flag 2.png" alt="Red Flag"></td>
                    <td class="area"><p>Jalandhar</p></td>
                </tr>
                <tr class="row">
                    <td class="name"><a href="#">sagarkumarjha</a></td>
                    <td class="license"><p>R0344-86816-43681</p></td>
                    <td class="contact"><p>+91 0921456704</p></td>
                    <td class="flag"><img src="../images/red flag 2.png" alt="Red Flag"></td>
                    <td class="area"><p>Jalandhar</p></td>
                </tr>
                <tr class="row">
                    <td class="name"><a href="#">pranjali Singh</a></td>
                    <td class="license"><p>R0344-86816-43681</p></td>
                    <td class="contact"><p>+91 0921456704</p></td>
                    <td class="flag"><img src="../images/red flag 2.png" alt="Red Flag"></td>
                    <td class="area"><p>Jalandhar</p></td>
                </tr>
                <tr class="row">
                    <td class="name"><a href="#">rishabh</a></td>
                    <td class="license"><p>R0344-86816-43681</p></td>
                    <td class="contact"><p>+91 0921456704</p></td>
                    <td class="flag"><img src="../images/red flag 2.png" alt="Red Flag"></td>
                    <td class="area"><p>Jalandhar</p></td>
                </tr>
                <tr class="row">
                    <td class="name"><a href="#">pulkit</a></td>
                    <td class="license"><p>R0344-86816-43681</p></td>
                    <td class="contact"><p>+91 0921456704</p></td>
                    <td class="flag"><img src="../images/red flag 2.png" alt="Red Flag"></td>
                    <td class="area"><p>Jalandhar</p></td>
                </tr>
                
                <tr class="row">
                    <td class="name"><a href="#">sushant</a></td>
                    <td class="license"><p>R0344-86816-43681</p></td>
                    <td class="contact"><p>+91 0921456704</p></td>
                    <td class="flag"><img src="../images/red flag 2.png" alt="Red Flag"></td>
                    <td class="area"><p>Jalandhar</p></td>
                </tr>
                
                <tr class="row">
                    <td class="name"><a href="#">saurabh</a></td>
                    <td class="license"><p>R0344-86816-43681</p></td>
                    <td class="contact"><p>+91 0921456704</p></td>
                    <td class="flag"><img src="../images/red flag 2.png" alt="Red Flag"></td>
                    <td class="area"><p>Jalandhar</p></td>
                </tr>
                <tr class="row">
                    <td class="name"><a href="#">chetna</a></td>
                    <td class="license"><p>R0344-86816-43681</p></td>
                    <td class="contact"><p>+91 0921456704</p></td>
                    <td class="flag"><img src="../images/red flag 2.png" alt="Red Flag"></td>
                    <td class="area"><p>Jalandhar</p></td>
                </tr>
                
            </table>
        </div>
    </main>

</body>

</html>
