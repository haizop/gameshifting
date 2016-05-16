# == Schema Information
#
# Table name: panels
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  console_id  :integer
#  user_id     :integer
#  default_set :json
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Panel < ActiveRecord::Base
  belongs_to :console
  belongs_to :user
  has_many :toggles
end
