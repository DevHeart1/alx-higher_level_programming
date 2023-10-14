#!/usr/bin/python3

def best_score(a_dictionary):
    if not a_dictionary:
        return None

    best_score_key = None
    best_score_value = float('-inf')

    for key, value in a_dictionary.items():
        if value > best_score_value:
            best_score_key = key
            best_score_value = value

    return best_score_key
