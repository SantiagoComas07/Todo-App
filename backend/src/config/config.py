import os
from dotenv import load_dotenv

load_dotenv()

# Statemente the DB route getting the environment variable
sql_url=os.getenv('SQLITE_URL')

if sql_url is None:
    raise RuntimeError("sql_url is None")


sqlite_url = f"sqlite:///{sql_url}"

print("DATABASE_URL =", sqlite_url)