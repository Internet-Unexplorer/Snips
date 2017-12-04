if(isset($_POST['someVariable'])) // Check for post SET
{
    if($_POST['someVariable']==1)
    {
        // Operations
        $id = preg_replace('#[^0-9]#', '', $_POST['id']);
        $uid = $_SESSION['userid'];

        $sql = "SELECT id FROM cart WHERE uid='$uid' AND itemid='$id' AND orders='0' LIMIT 1";
		$query = mysqli_query($connect_db, $sql);
        $ie = mysqli_num_rows($query);
        if($ie<1)
        {
            echo "doesntexists";
            echo trim(ob_get_clean());
            exit();
        }
        
        $sql = "DELETE FROM cart WHERE uid='$uid' AND itemid='$id' AND orders='0'";
		$query = mysqli_query($connect_db, $sql);
        
        echo "removed";
        echo trim(ob_get_clean());
        exit();
    }
}
