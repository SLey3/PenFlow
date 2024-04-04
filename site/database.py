
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import text
from sqlalchemy import create_engine, Column, Integer, String, Text, TIMESTAMP, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

class Base(DeclarativeBase):
  pass

db = SQLAlchemy(model_class=Base)

# create the app
app = Flask(__name__)
# configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://mainuser:aYPVpG8ss6HrOUNNlHyZTn8i02COPWwr@dpg-cnfootgcmk4c73b0qa70-a/penflowdb"
# initialize the app with the extension
db.init_app(app)

# Creating the base class for declarative table definitions
Base = declarative_base()

# User Table
class User(Base):
    __tablename__ = 'users'
    user_id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(100), nullable=False)
    created_at = Column(TIMESTAMP, nullable=False, server_default=text('CURRENT_TIMESTAMP'))


# Whiteboard Table
class Whiteboard(Base):
    __tablename__ = 'whiteboards'
    whiteboard_id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(100), nullable=False)
    description = Column(Text)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    created_at = Column(TIMESTAMP, nullable=False, server_default=text('CURRENT_TIMESTAMP'))

    user = relationship("User", backref="whiteboards")

# Drawing Table
class Drawing(Base):
    __tablename__ = 'drawings'
    drawing_id = Column(Integer, primary_key=True, autoincrement=True)
    whiteboard_id = Column(Integer, ForeignKey('whiteboards.whiteboard_id'), nullable=False)
    data = Column(Text, nullable=False)
    created_at = Column(TIMESTAMP, nullable=False, server_default=text('CURRENT_TIMESTAMP'))
    whiteboard = relationship("Whiteboard", backref="drawings")

# Create engine
engine = create_engine('postgresql://mainuser:aYPVpG8ss6HrOUNNlHyZTn8i02COPWwr@dpg-cnfootgcmk4c73b0qa70-a.oregon-postgres.render.com/penflowdb')

# Create tables
Base.metadata.create_all(engine)
