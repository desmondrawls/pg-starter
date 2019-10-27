echo -e "\e[31mseeding db\e[39m"
psql -f /seeds.sql $DB_URL
sleep 1
echo -e "\e[31mdone\e[39m"

