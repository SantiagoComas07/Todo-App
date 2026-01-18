import os
from dotenv import load_dotenv

load_dotenv()

# Statemente the DB route getting the environment variable
sql_url=os.getenv(SQLITE_URL)

sqlite_url = f"///{sql_url}"