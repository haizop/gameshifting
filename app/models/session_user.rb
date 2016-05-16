# == Schema Information
#
# Table name: session_users
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  session_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_session_users_on_session_id  (session_id)
#  index_session_users_on_user_id     (user_id)
#

class SessionUser < ActiveRecord::Base
  belongs_to :user
  belongs_to :session
end
