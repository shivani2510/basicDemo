homepage route define in app-routing.module.ts

module that directly imported in main AppModule is AuthModule.

Lazy Loaded module is dashboard.

Child routing define in Layout module

Basic layout component contain separate header, footer and content part.

We can customize the layout style according to user role and different views using layouts.


Login:
Admin: Username: admin
      Password: admin

Staff: Username: staff
      password: Demo1234

src/app/feature/auth/auth.service.ts:   contains backend interaction part.
                                        HttpClient method is in Http module.



Auth Guard implemented to protect the private from access without authentication and authorization.
