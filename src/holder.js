<Tabs  onActive={()=> <Select value={"Location"} options={['small', 'medium', 'large']}/>}>

<Tab title="Buy" margin="60px" >
<form>
<FormField>
    <Select value={"Location"} options={['small', 'medium', 'large']}/>
</FormField>
</form>
</Tab>

<Tab title="Rent" margin="60px" onActive={()=> alert("hos")}>
<form>
<FormField>
<TextInput value={"Location"} options={['small', 'medium', 'large']}/>
</FormField>
</form>
</Tab>

<Tab title="Lease" margin="60px">
<form>
<FormField style={{width:"350px"}}>
<Select value={"Location"} options={['small', 'medium', 'large']} onChange={(option)=> holder=option}/>
</FormField>
</form>
</Tab>

<Select options={['small', 'medium', 'large']} vlaue="true"/>


</Tabs>

<Box direction="row" justify="center">
<div onClick={()=> alert("at")}>Buy</div> 
<div onClick={()=> alert("at")}>Rent</div>
<div onClick={()=> alert("at")}>Lease</div>
</Box>
