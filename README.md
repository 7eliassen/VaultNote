# VaultNote
VaultNote is a full-stack application (FastAPI | React) for taking notes which I am developing for learning purposes.
So far, I have finished only the basic functionality without note encryption.

At the moment, the app has the following functionality:
- User registration and login
- Storing, deleting, creating, and editing notes, searching notes, and auto-saving notes

In the future (maybe) I will add:
- Note encryption
- Formatting notes in Markdown
- App for smartphones (There is no adaptive design now)

![Home page](https://raw.githubusercontent.com/7eliassen/VaultNote/refs/heads/master/docs/homepage.png)
*Home page*

![Login and registration pages](https://raw.githubusercontent.com/7eliassen/VaultNote/refs/heads/master/docs/login_page.png)
*Login and registragion pages*

---
## Instalation
`pip install -r /backend/requirements.txt`
After this create `/backend/src/app/config.py` file
Then write there `SECRET_KEY = "..."` (You can generate secret key by `openssl rand -hex 32` in your terminal.)
Then start server `uvicorn --host 0.0.0.0 --port 8000 main:app`. (You must be in `/backend/src` folder).


