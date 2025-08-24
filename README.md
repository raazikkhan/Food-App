# A Food Ordering App with Swiggy Real Time Api

<Stack direction="row" spacing={2}>
                <Button
                  className="!rounded-md "
                  variant="contained"
                  color="white"
                  onClick={() => {
                    loginBtn === "login"
                      ? setLoginBtn("Logout")
                      : setLoginBtn("login");
                    console.log(loginBtn);
                  }}
                >
                  {loginBtn}
                </Button>
              </Stack>
