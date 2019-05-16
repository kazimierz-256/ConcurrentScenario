let prescribed_stories =
{
    'Warsaw Standoff': {
        action_domain: `SHOOT12 causes not ALIVE2 if ALIVE1 and not JAMMED1 and FACING12
SHOOT13 causes not ALIVE3 if ALIVE1 and not JAMMED1 and FACING13
SHOOT21 causes not ALIVE1 if ALIVE2 and not JAMMED2 and FACING21
SHOOT23 causes not ALIVE3 if ALIVE2 and not JAMMED2 and FACING23
SHOOT31 causes not ALIVE1 if ALIVE3 and not JAMMED3 and FACING31
SHOOT32 causes not ALIVE2 if ALIVE3 and not JAMMED3 and FACING32
impossible SHOOT31 at 0
impossible SHOOT32 at 0
impossible SHOOT31 at 1
impossible SHOOT32 at 1
ROTATE12 causes FACING12 if ALIVE1
ROTATE13 causes FACING13 if ALIVE1
ROTATE21 causes FACING21 if ALIVE2
ROTATE23 causes FACING23 if ALIVE2
ROTATE31 causes FACING31 if ALIVE3
ROTATE32 causes FACING32 if ALIVE3
LOAD1 releases JAMMED1 if ALIVE1
LOAD2 releases JAMMED2 if ALIVE2
LOAD3 causes NOT JAMMED3 if ALIVE3`,
        scenario: `({
(ALIVE1 and ALIVE2 and ALIVE3 and not JAMMED1 and not JAMMED2 and not JAMMED3 and FACING12 and FACING23 and FACING31,0),
(not JAMMED1 or not JAMMED2,1)
},
{
({LOAD1,LOAD2,LOAD3},0),
({SHOOT12,SHOOT23},1),
({ROTATE13,ROTATE21,SHOOT31},2),
({SHOOT13,SHOOT21,ROTATE32},3),
({SHOOT32},4)
})`,
        query: `possibly accessible ALIVE1 and not ALIVE2 and not ALIVE3 at 5`
    },
    'test': {
        action_domain: `abc`,
        scenario: `def`,
        query: `ghi`
    },
    'indyk': {
        action_domain: `abc2`,
        scenario: `def2`,
        query: `ghi2`
    }
};