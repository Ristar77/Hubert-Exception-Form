from dotenv import load_dotenv, find_dotenv
import os
from pymongo import MongoClient

# Load environment variables
load_dotenv(find_dotenv())

# Retrieve the password after loading dotenv
password = os.environ.get("MONGODB_PWD")

connection_string = f"mongodb+srv://richard271277:RuRSuqBB0uBiFeIK@rainford101.nnlqg.mongodb.net/exceptiondb?retryWrites=true&w=majority&appName=Rainford101"

client = MongoClient(connection_string)

dbs = client.list_database_names()
print(dbs)
