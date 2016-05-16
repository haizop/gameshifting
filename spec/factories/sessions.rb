# == Schema Information
#
# Table name: sessions
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :session do
    
  end

end
