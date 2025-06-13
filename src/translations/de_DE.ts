export default {
    "confirm_modal": {
        "buttons": {
            "cancel": "Abbrechen",
            "confirm": "Bestätigen",
        }
    },
    "start": {
        "headline": "Willkommen bei OpenCal",
        "message": "Bitte verwenden Sie den persönlichen Link eines Benutzers, um Termine zu buchen."
    },
    "login": {
        "headline": "OpenCal Login",
        "email": "E-Mail-Adresse",
        "password": "Passwort",
        "button": "Anmelden",
        "reset_password": "Paswort zurücksetzen"
    },
    "password_request": {
        "headline": "Passwort zurücksetzen",
        "email": "E-Mail-Adresse",
        "submit_button": "Passwort anfordern",
        "message_requested": "Sie haben eine E-Mail mit einem Link zum Zurücksetzen Ihres Passworts erhalten."
    },
    "password_reset": {
        "headline": "Passwort zurücksetzen",
        "email": "E-Mail-Adresse",
        "submit_button": "Passwort zurücksetzen",
        "message_changed": "Das Passwort wurde erfolgreich zurückgesetzt.",
        "errors": {
            "email_invalid": "Bitte geben Sie die korrekte E-Mail-Adresse an.",
            "password_dont_match": "Die Passwörter stimmen nicht überein."
        }
    },
    "header": {
        "nav": {
            "dashboard": "Übersicht",
            "appointments": "Termine",
            "logout": "Abmelden",
            "account": "Konto"
        }
    },
    "account": {
        "headline": "Mein Konto",
        "name": "Name",
        "email": "E-Mail-Adresse",
        "locale": "Sprache",
        "password": "Passwort",
        "teams": "Teams",
        "buttons": {
            "edit": "Bearbeiten"
        },
        "messages": {
            "saved_success": "Änderungen erfolgreich gespeichert.",
            "save_failed": "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
        },
        "form": {
            "title": "Kontodaten bearbeiten",
            "given_name": "Vorname",
            "family_name": "Nachname",
            "email": "E-Mail-Adresse",
            "locale": "Sprache",
            "buttons": {
                "cancel": "Abbrechen",
                "save": "Speichern"
            }
        },
        "caldav_accounts": "CalDAV Accounts",
        "caldav_auths": {
            "headline": "CalDAV Accounts",
            "buttons": {
                "edit": "Bearbeiten",
                "add": "Hinzufügen",
                "back": "Zurück",
            },
            "create_modal": {
                "headline": "CalDAV-Kalender hinzufügen",
            },
            "form": {
                "buttons": {
                    "save": "Speichern"
                },
                "fields": {
                    "base_uri": "URL zum CalDAV-Kalender",
                    "username": "Username",
                    "password": "Passwort",
                },
                "success_message": "Der Datensatz wurde gespeichert.",
            },
            "delete": {
                "confirm_headline": "CalDAV-Authentifizierung löschen??",
                "confirm_message": "Sind Sie sicher, dass Sie diesen Eintrag löschen möchten? Alle synchronisierten Daten werden entfernt.",
                "success_message": "Der Datensatz wurde gelöscht."
            }
        }
    },
    "change": "ändern",
    "booking": {
        "index": {
            "intro": "Willkommen auf meiner Planungsseite. Wähle hier einen Ereignistyp aus, um einen Termin zu planen.",
            "minutes": "Minuten"
        },
        "book_now": {
            "not_available": "{name} ist am {date_string} nicht verfügbar. Bitte wähle einen anderen Tag.",
            "available_timeslots": "Buchbare Zeiten",
        },
        "form": {
            "headline": "Termin buchen",
            "fields": {
                "name": "Name",
                "email": "E-Mail Adresse",
                "message": "Nachricht an {name} zur Vorbereitung des Meetings"
            },
            "buttons": {
                "submit": "Terminbuchung absenden"
            },
            "messages": {
                "success": "Termin erfolgreich gebucht.",
                "error": "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
            }
        },
        "cancel": {
            "headline": "Termin absagen",
            "confirm_message": "Möchten Sie den Termin wirklich absagen?",
            "success_message": "Termin erfolgreich abgesagt.",
            "appointment": "Ereignis",
            "day": "Tag",
            "time": "Uhrzeit",
            "buttons": {
                "cancel_appointment": "Termin absagen"
            }
        }
    },
    "dashboard": {
        "appointments": {
            "index": {
                "headline": "Termine"
            },
            "details": {
                "headline": "Details zum Termin",
                "fields": {
                    "event_type": "Typ",
                    "date_time": "Datum & Uhrzeit",
                    "participant_name": "Teilnehmer",
                    "participant_email": "E-Mail-Adresse",
                }
            }
        }
    }
}
