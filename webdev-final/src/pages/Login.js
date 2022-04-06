import React from "react";
import pic2 from '../images/pic2.jpeg'

const Login = () => {
	return (
		<>
			<h1>STAT TRACKER</h1>

			<form action="/actionpage.php" method="post">
				<table>
					<td>
						<div class="imgcontainer">
							<img
								src={pic2}
								alt="img"
								class="image"
							/>
						</div>
					</td>

					<td>
						<div class="container">
							<label for="user">
								<b>Username</b>
							</label>
							<input
								type="text"
								placeholder="Enter Username"
								name="user"
								required
							/>

							<label for="pass">
								<b>Password</b>
							</label>
							<input
								type="password"
								placeholder="Enter Password"
								name="pass"
								required
							/>

							<button type="submit">Login</button>
							<label>
								<input
									type="checkbox"
									checked="checked"
									name="remember"
								/>
								Remember Me
							</label>
						</div>
					</td>
				</table>
			</form>
		</>
	);
};

export default Login;
