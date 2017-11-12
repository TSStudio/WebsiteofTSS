function searchDB(video,by)
{
    var str=[{"name":"tmy_sam","id":"1"},{"name":"testuser2","id":"2"}];
    output=new Object();
    switch(by)
    
    {
        case '1':
        output.by=str[0].name;
        id=str[0].id;
        tmysam(video);
        break;
    }
}