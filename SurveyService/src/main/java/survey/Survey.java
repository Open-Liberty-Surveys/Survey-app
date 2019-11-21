package survey;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

public class Survey {
    
private final String USERNAME = "root";
private final String PASSWORD = "root";
private final String CONN = "jdbc:mysql://localhost/surveyme";    
        
    
public static void getConnection() throws SQLException{
    
    
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(CONN,USERNAME,PASSWORD);
    }
        catch (ClassNotFoundException|SQLException ex){
            ex.printStackTrace();
       

}
    return null;

}

    
    public static void main(String[] args){

        
String username = "";
String question = "";
String[] options = {};
String[][] answers = {{}};          
        
        
        
        
        Scanner input = new Scanner(System.in);
        System.out.println("username?");
        username = input.nextLine();
        
        
        Connection con = this.getConnection();
        Statement statement = con.createStatement();
        statement.executeUpdate("INSERT INTO surveys " + "VALUES ('' , '' , '' , '')");
        System.out.println("connected");
    }
    
    
}
