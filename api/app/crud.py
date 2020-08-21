from sqlalchemy.orm import Session

from . import models, schemas


def get_profile(db: Session, profile_id: int):
    return db.query(models.Profile).filter(models.Profile.id == profile_id).first()


def get_profiles(db: Session):
    return db.query(models.Profile).all()


def create_profile(db: Session, profile: schemas.ProfileCreate):
    db_profile = models.Profile(
        name=profile.name,
        email=profile.email,
        address=profile.address,
        birthdate=profile.birthdate,
        about_me=profile.about_me,
        telephone_number=profile.telephone_number,
    )
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile
