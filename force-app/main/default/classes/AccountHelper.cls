public with sharing class AccountHelper {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Name, AnnualRevenue, Industry
            
            FROM Account
            WITH SECURITY_ENFORCED

        ];
    }
}