:- module(query_parsing, 
    [
        get_query_from_text/2
	]).

:- use_module(library(dcg/basics)).
:- use_module(logic_tree_parsing).

csv_to_list([S]) --> fluent(F),{string_chars(S, F)}.
csv_to_list([S|Others]) --> fluent(F),{string_chars(S, F)},([',']|[',',' ']),csv_to_list(Others).


parse_query(necessarily_executable) --> parse_string("necessarily executable").
parse_query(possibly_executable) --> parse_string("possibly executable").
parse_query(necessarily_accessible(Tree, Time)) -->
    parse_string("necessarily accessible "), logictree(Tree), parse_string(" at "), integer(Time).
parse_query(possibly_accessible(Tree, Time)) -->
    parse_string("possibly accessible "), logictree(Tree), parse_string(" at "), integer(Time). 
parse_query(necessarily_executable(Action, Time)) -->
    parse_string("necessarily executable "), csv_to_list(Action), parse_string(" at "), integer(Time).
parse_query(possibly_executable(Action, Time)) -->
    parse_string("possibly executable "), csv_to_list(Action), parse_string(" at "), integer(Time).

get_query_from_text(Query, Text) :- 
    normalize_space(string(String_Cleaned), Text),
    string_chars(String_Cleaned, Chars),
    phrase(parse_query(Query), Chars).

run_query(necessarily_executable(Tree)) :-
    writeln("necessarily_executable scenario").

run_query(possibly_executable(Tree)) :-
    writeln("possibly executable scenario").

run_query(necessarily_accessible(Tree, Time)) :-
    writeln("possibly accessible gamma at t").

run_query(necessarily_executable(List, Time)) :-
    writeln("possibly accessible gamma at t").

run_query(possibly_executable(List, Time)) :-
    writeln("possibly accessible gamma at t").

:- 
    % get_query_from_text(Query, "necessarily executable"),
    % writeln(Query).
    %get_query_from_text(Query, "possibly accessible ALIVE1 and not ALIVE2 and not ALIVE3 at 5"),

    get_query_from_text(Query, "necessarily executable SHOOT12, SHOOT31, SHOOT51 at 5"),
    
    run_query(Query).