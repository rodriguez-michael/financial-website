from django.conf import settings
from plaid import Client


def plaidclient():
    config = {
        'client_id': settings.PLAID_CLIENT_ID,
        'secret': settings.PLAID_SECRET,
        'environment': settings.PLAID_ENV 
    }
    return Client(**config)

        # client_id='5fda5a92e05f4b00128721ba', secret='a243162dd7987c501116e429726e33', environment='sandbox'


def plaidLinkTokenDict(client_user_id):
    return {
        'user': {
            'client_user_id': client_user_id,
        },
        'products': settings.PLAID_PRODUCTS,
        'client_name': settings.PLAID_APP_NAME,
        'country_codes': settings.PLAID_COUNTRY_CODES,
        'language': settings.PLAID_LANGUAGES,
        'webhook': 'https://webhook.sample.com',
    }